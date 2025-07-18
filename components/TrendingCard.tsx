import { images } from "@/constants/images"
import MaskedView from "@react-native-masked-view/masked-view"
import { Link } from "expo-router"
import { Image, Text, TouchableOpacity, View } from "react-native"

interface TrendingMovieProps {
  movie: TrendingMovie
  index: number
}

const TrendingCard = ({ movie: { movie_id, title, poster_url }, index }: TrendingMovieProps) => {
  return (
    <Link href={`/movies/${movie_id}`} asChild>
      <TouchableOpacity className="w-32 relative pl-5">
        <Image
          source={{
            uri: poster_url
              ? `https://image.tmdb.org/t/p/w500${poster_url}`
              : "https://placehold.co/600x400/1a1a1a/ffffff.png",
          }}
          className="w-32 h-48 rounded-lg"
          resizeMode="cover"
        />

        <View className="absolute bottom-9 -left-3.5 px-2 py-1 rounded-full">
          <MaskedView
            maskElement={<Text className="text-white text-6xl font-bold">{index + 1}</Text>}>
            <Image source={images.rankingGradient} className="size-14" resizeMode="cover" />
          </MaskedView>
        </View>
        <Text className="text-sm font-bold text-light-200 mt-2" numberOfLines={2}>
          {title}
        </Text>
      </TouchableOpacity>
    </Link>
  )
}

export default TrendingCard
