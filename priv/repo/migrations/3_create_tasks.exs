defmodule TaskTracker.Repo.Migrations.CreateTasks do
  use Ecto.Migration

  def change do
    create table(:tasks) do
      add :title, :string
      add :description, :text
      add :done, :boolean, default: false, null: false
      add :time_spent, :integer, default: 0, null: false
      add :user_id, references(:users, on_delete: :delete_all), null: false
      timestamps()
    end
     
      create index(:tasks, [:user_id])
  end
end
