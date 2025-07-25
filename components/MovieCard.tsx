import { icons } from "@/constants/icons"
import { Link } from "expo-router"
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native"

const MovieCard = ({
  id,
  poster_path,
  title,
  vote_average,
  vote_count,
  release_date,
  popularity,
}: Movie) => {
  return (
    <Link href={`/movies/${id}`} asChild>
      <TouchableOpacity className="w-[30%]">
        <View className="w-full h-52 rounded-lg overflow-hidden">
          <ImageBackground
            source={{
              uri: poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : "https://placehold.co/600x400/1a1a1a/ffffff.png",
            }}
            className="w-full h-52 rounded-lg"
            resizeMode="cover">
            <View className="absolute top-0 right-0 bg-light-100 rounded-lg px-1 py-1 mt-2 mr-2">
              <Text className="text-xs text-black font-medium">{Math.round(popularity)}</Text>
            </View>
          </ImageBackground>
        </View>
        {/* <Image
          source={{
            uri: poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : "https://placehold.co/600x400/1a1a1a/ffffff.png",
          }}
          className="w-full h-52 rounded-lg"
          resizeMode="cover"
        /> */}
        <Text className="text-sm font-bold text-white mt-2" numberOfLines={1}>
          {title}
        </Text>
        <View className="flex-row items-center justify-start gap-x-1">
          <Image source={icons.star} className="size-4" />
          <Text className="text-xs text-white font-bold uppercase">{vote_average.toFixed(1)}</Text>
          <Text className="text-xs text-light-300 font-medium uppercase">({vote_count})</Text>
        </View>

        <View className="flex-row items-center justify-between">
          <Text className="text-xs text-light-300 font-medium mt-1">
            {release_date?.split("-")[0]}
          </Text>
          <Text className="text-xs font-medium text-light-300 uppercase">Movie</Text>
        </View>
      </TouchableOpacity>
    </Link>
  )
}

export default MovieCard
