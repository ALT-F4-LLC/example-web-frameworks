defmodule Store.Application do
  use Application

  def start(_type, _args) do
    import Supervisor.Spec

    children = [
      worker(Store.User, [])
    ]

    options = [
      name: Store.Supervisor,
      strategy: :one_for_one
    ]

    Supervisor.start_link(children, options)
  end
end
