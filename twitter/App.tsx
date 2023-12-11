import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Tweet {
  id:number,
  handle:string,
  text:string,
  createdOn:string
}
interface Profile{
  id:number,
  handle:number,
  name:string,
  bio:string,
  avatar:string,
  banner:string
}

export const TwitterPosts = (tweet: Tweet, profile: Profile) => {

  return(
    <View>
      <View>
        <img src={profile.avatar} alt={profile.name} />
        <p>{profile.name}</p>
        <p>{profile.handle}</p>
      </View>
      <View>
        <p>{tweet.text}</p>
      </View>
    </View>
  )
}

export default function App() {
const [tweets, setTweets] = useState<Tweet[] | undefined>();
const [profiles, setProfiles] = useState<Profile[] | undefined>()
useEffect(() => {
  const fetchTweets = async() => {
    let response = await fetch("https://my-json-server.typicode.com/similonap/twitter-json-server/tweets");
    let data : Tweet[] = await response.json();
    console.log(data)
    setTweets(data);  
  }
  fetchTweets();
},[])
useEffect(()=> {
  const fetchProfiles = async() => {
    let response = await fetch("https://my-json-server.typicode.com/similonap/twitter-json-server/profiles");
    let data : Profile[] = await response.json();
    console.log(data);
    setProfiles(data);
  }
  fetchProfiles();
},[])

  return (
    <View style={{flexDirection: "column", flex: 1, justifyContent: "flex-start", alignItems: "center"}}>
      <View>
      <input type="text" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
