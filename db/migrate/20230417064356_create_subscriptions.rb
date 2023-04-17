class CreateSubscriptions < ActiveRecord::Migration[7.0]
  def up
    create_table :subscriptions do |t|
      t.references :subscriber, null: false, foreign_key: { to_table: :users }
      t.references :channel, null: false, foreign_key: { to_table: :users }

      t.timestamps
    end
  end

  def down
    drop_table :subscriptions
  end
end
