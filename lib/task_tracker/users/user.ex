defmodule TaskTracker.Users.User do
  use Ecto.Schema
  import Ecto.Changeset


  schema "users" do
    field :name, :string
    belongs_to :manager, TaskTracker.Users.User

    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:name, :manager_id])
    |> foreign_key_constraint(:manager_id)
    |> validate_required([:name])
  end
end
