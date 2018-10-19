defmodule TaskTrackerWeb.PageController do
  use TaskTrackerWeb, :controller

  def index(conn, _params) do
    if Plug.Conn.get_session(conn, :user_id) do
	redirect(conn, to: "/tasks")
    else
    	render(conn, "index.html")
    end
  end
end
