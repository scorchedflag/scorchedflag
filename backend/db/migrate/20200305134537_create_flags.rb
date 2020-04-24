class CreateFlags < ActiveRecord::Migration[6.0]
  def change
    create_table :flags do |t|
      t.string :picture

      t.timestamps
    end
  end
end
