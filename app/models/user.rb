class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :lockable

  validates :username, presence: true, length: { maximum: 100 }

  has_many :videos, dependent: :destroy

  has_many :likes, dependent: :destroy
  has_many :liked_videos, through: :likes, source: :likeable, source_type: 'Video'

  has_many :views, dependent: :nullify
  has_many :viewed_videos, through: :views, source: :video
end
