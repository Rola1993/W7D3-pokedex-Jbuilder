@pokemon.each do |poke|
  json.set! poke.id do
    json.extract! poke, :id, :name
    json.image_url asset_path(poke.image_url)
#  Asset locations can be different in production so you should always use
# asset_path rather than a literal path
  end
end
