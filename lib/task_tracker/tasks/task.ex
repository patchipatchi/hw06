defmodule TaskTracker.Tasks.Task do
  use Ecto.Schema
  import Ecto.Changeset


  schema "tasks" do
    field :description, :string
    field :done, :boolean, default: false
    field :title, :string, null: false
    belongs_to :user, TaskTracker.Users.User
    has_many :time_block, TaskTracker.TimeBlocks.TimeBlock

    timestamps()
  end

  @doc false
  def changeset(task, attrs) do
    task
    |> cast(attrs, [:title, :description, :done, :user_id])
    |> foreign_key_constraint(:user_id)
    |> validate_required([:title, :description, :done, :user_id])
  end
end
