class Video < ApplicationRecord
  belongs_to :user

  has_one_attached :video
  has_one_attached :thumbnail

  has_many :likes, as: :likeable, dependent: :destroy
  has_many :dislikes, as: :dislikeable, dependent: :destroy
  has_many :comments, as: :commentable, dependent: :destroy
  has_many :views, dependent: :destroy

  validates :title, presence: true, length: { maximum: 100 }
  validates :description, length: { maximum: 1000 }

  validate :acceptable_thumbnail, :acceptable_video

  after_create :attach_default_thumbnail

  private

  def acceptable_attachment(attachment, max_size, acceptable_types, required: false)
    if required
      return errors.add(attachment.name, 'must be present') unless attachment.attached?
    else
      return unless attachment.attached?
    end

    errors.add attachment.name, 'is too big' unless attachment.byte_size <= max_size

    unless acceptable_types.include? attachment.content_type
      errors.add attachment.name,
                 "must be #{acceptable_types.join(' or ')}"
    end
  end

  def acceptable_thumbnail
    acceptable_attachment thumbnail, 5.megabyte, ['image/jpeg', 'image/png']
  end

  def acceptable_video
    acceptable_attachment video, 128.megabyte, ['video/mp4'], required: true
  end

  def attach_default_thumbnail
    return if thumbnail.attached?

    path = Rails.root.join 'app', 'assets', 'images', 'thumbnails', 'default.jpg'
    thumbnail.attach io: File.open(path), filename: 'default.jpg', content_type: 'image/jpeg'
  end
end
