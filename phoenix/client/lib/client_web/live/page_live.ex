defmodule ClientWeb.PageLive do
  use ClientWeb, :live_view

  @impl true
  def mount(_params, _session, socket) do
    name = Store.get(:name)

    {:ok, assign(socket, name: name, page_title: "Dashboard")}
  end

  @impl true
  def handle_event("set_name", %{"name" => name}, socket) do
    Store.update(:name, name)

    {:noreply, assign(socket, name: name)}
  end
end
