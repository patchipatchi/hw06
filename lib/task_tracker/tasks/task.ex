defmodule TaskTracker.Tasks.Task do
  use Ecto.Schema
  import Ecto.Changeset


  schema "tasks" do
    field :description, :string
    field :done, :boolean, default: false
    field :title, :string, null: false
    field :time_spent, :integer, default: 0
    belongs_to :user, TaskTracker.Users.User

    timestamps()
  end

  @doc false
  def changeset(task, attrs) do
    task
    |> cast(attrs, [:title, :description, :done, :time_spent, :user_id])
    |> foreign_key_constraint(:user_id)
    |> validate_required([:title, :description, :done, :user_id])
  end
end
