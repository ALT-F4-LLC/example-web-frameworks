defmodule Store do
  use Agent

  @me __MODULE__

  def start_link(_args) do
    Agent.start_link(fn -> %{name: "Jane"} end, name: @me)
  end

  def get(key) do
    Agent.get(@me, &Map.get(&1, key))
  end

  def update(key, value) do
    Agent.update(@me, &Map.put(&1, key, value))
  end
end
