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

  validates :thumbnail, attached: true, size: { less_than: 5.megabytes, message: 'must be less than 5MB' }, content_type: ['image/jpeg', 'image/png'],
                        dimension: { width: { min: 640 }, height: { min: 360 }, message: 'must have a width of at least 640px and height 360px' },
                        aspect_ratio: :is_16_9
  validates :video, attached: true, size: { less_than: 128.megabytes, message: 'must be less than 128MB' },
                    content_type: 'video/mp4'

  after_create :attach_default_thumbnail

  private

  def attach_default_thumbnail
    return if thumbnail.attached?

    path = Rails.root.join 'app', 'assets', 'images', 'thumbnails', 'default.jpg'
    thumbnail.attach io: File.open(path), filename: 'default.jpg', content_type: 'image/jpeg'
  end
end
