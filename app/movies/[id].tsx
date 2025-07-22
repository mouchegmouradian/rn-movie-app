import { icons } from "@/constants/icons"
import { fetchMovieDetails } from "@/services/api"
import useFetch from "@/services/useFetch"
import { router, useLocalSearchParams } from "expo-router"
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native"

interface MovieInfoProps {
  label: string
  value?: string | number | null
}

const MovieInfo = ({ label, value }: MovieInfoProps) => (
  <View className="flex-col items-start justify-center mt-5">
    <Text className="text-light-200 font-normal text-sm">{label}</Text>
    <Text className="text-light-100 font-medium text-sm mt-2">{value || "N/A"}</Text>
  </View>
)

const MovieDetails = () => {
  const { id } = useLocalSearchParams()
  const { data: movie, loading, error } = useFetch(() => fetchMovieDetails(id as string))

  return (
    <View className="flex-1 bg-primary">
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <View>
          <Image
            source={{
              uri: movie?.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie?.poster_path}`
                : "https://placehold.co/600x400/1a1a1a/ffffff.png",
            }}
            className="w-full h-[550px]"
            resizeMode="stretch"
          />
        </View>
        <View className="flex-col items-start justify-center mt-5 px-5">
          <Text className="text-white text-xl font-bold">{movie?.title}</Text>
          <View className="flex-row items-center gap-x-1 mt-2">
            <Text className="text-light-200 text-sm">{movie?.release_date?.split("-")[0]}</Text>
            <Text className="text-light-200 text-sm">•</Text>
            <Text className="text-light-200 text-sm">{movie?.runtime} min</Text>
          </View>
          <View className="flex-row items-center bg-dark-100 rounded-md gap-x-1 px-2 py-1 mt-2">
            <Image source={icons.star} className="w-4 h-4" resizeMode="contain" />
            <Text className="text-light-200 text-sm">{movie?.vote_average.toFixed(1)}</Text>
            <Text className="text-light-200 text-sm">({movie?.vote_count} votes)</Text>
          </View>

          <View className="flex-row items-center mt-2">
            <FlatList
              data={movie?.genres}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                gap: 5,
              }}
              renderItem={({ item }: { item: { id: number; name: string } }) => (
                <View className="flex-row items-center bg-dark-100 rounded-md px-2 py-1 mt-2">
                  <Text className="text-light-200 text-sm">{item.name}</Text>
                </View>
              )}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
          <MovieInfo label="Overview" value={movie?.overview} />

          <View className="flex flex-row justify-between w-2/3">
            <MovieInfo
              label="Budget"
              value={`$${movie?.budget ? movie?.budget / 1_000_000 : 0} million`}
            />
            <MovieInfo
              label="Revenue"
              value={`$${movie?.revenue ? movie?.revenue / 1_000_000 : 0} million`}
            />
          </View>
          <MovieInfo
            label="Production Companies"
            value={movie?.production_companies.map((company) => company.name).join("- ") || "N/A"}
          />
        </View>
      </ScrollView>
      <TouchableOpacity
        className="bottom-5 left-0 right-0 mx-5 bg-accent rounded-lg py-3.5 flex flex-row items-center justify-center z-50"
        onPress={router.back}>
        <Image source={icons.arrow} className="size-5 mr-1 mt-0.5 rotate-180" tintColor="#fff" />
        <Text className="text-white text-base font-semibold">Go back</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MovieDetails
