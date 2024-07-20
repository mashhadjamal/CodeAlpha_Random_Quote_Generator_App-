import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";


const _layout = () => {
  const quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Life is what happens when you're busy making other plans. – John Lennon",
    "Get busy living or get busy dying. – Stephen King",
    "You only live once, but if you do it right, once is enough. – Mae West",
    "Many of life\'s failures are people who did not realize how close they were to success when they gave up. – Thomas A. Edison",
    "If you want to achieve greatness stop asking for permission. – Anonymous",
    "I didn\'t fail the test. I just found 100 ways to do it wrong. – Benjamin Franklin",
    "The only limit to our realization of tomorrow will be our doubts of today. – Franklin D. Roosevelt",
    "What you lack in talent can be made up with desire, hustle and giving 110% all the time. – Don Zimmer",
    "Do what you can, where you are, with what you have. – Teddy Roosevelt",
    "You must be the change you wish to see in the world. – Mahatma Gandhi",
    "If you crevenge is massive success. – Frank Sinatra",
    "Life is either a daring adventure or nothing at all. – Helen Keller",
    "The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself. – Mark Caine",
    "Twenty years from now you will be more disappointed by the things that you didn\'t do than by the ones you did do. – Mark Twain",
    "The only peran dream it, you can achieve it. – Zig Ziglar",
    "The best son you are destined to become is the person you decide to be. – Ralph Waldo Emerson",
    "Go confidently in the direction of your dreams. Live the life you have imagined. – Henry David Thoreau",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "Never bend your head. Always hold it high. Look the world straight in the eye. – Helen Keller",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us. – Helen Keller",
    "Everything you\'ve ever wanted is on the other side of fear. – George Addair",
    "Start where you are. Use what you have. Do what you can. – Arthur Ashe",
    "When you reach the end of your rope, tie a knot in it and hang on. – Franklin D. Roosevelt",
    "Fall seven times and stand up eight. – Japanese Proverb",
    "Everything has beauty, but not everyone can see. – Confucius",
    "Life is not measured by the number of breaths we take, but by the moments that take our breath away. – Maya Angelou",
    "Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy. – Norman Vincent Peale",
    "If you want to lift yourself up, lift up someone else. – Booker T. Washington",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. – Ralph Waldo Emerson",
    "The only way to achieve the impossible is to believe it is possible. – Charles Kingsleigh",
    "Good, better, best. Never let it rest. 'Til your good is better and your better is best. – St. Jerome",
    "The only person you are destined to become is the person you decide to be. – Ralph Waldo Emerson",
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
    "A journey of a thousand miles begins with a single step. – Lao Tzu",
    "The best way to predict the future is to invent it. – Alan Kay",
    "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. – Nelson Mandela",
    "Life is what happens when you\'re busy making other plans. – John Lennon",
    "Spread love everywhere you go. Let no one ever come to you without leaving happier. – Mother Teresa",
    "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. – Buddha",
    "The only thing we have to fear is fear itself. – Franklin D. Roosevelt",
    "It does not matter how slowly you go as long as you do not stop. – Confucius",
    "It always seems impossible until it's done. – Nelson Mandela",
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
    "Tell me and I forget. Teach me and I remember. Involve me and I learn. – Benjamin Franklin",
    "In the end, it's not the years in your life that count. It's the life in your years. – Abraham Lincoln",
    "Many of life's failures are people who did not realize how close they were to success when they gave up. – Thomas A. Edison",
    "The only limit to our realization of tomorrow will be our doubts of today. – Franklin D. Roosevelt",
    "Life is what happens when you're busy making other plans. – John Lennon",
    "Get busy living or get busy dying. – Stephen King",
    "You only live once, but if you do it right, once is enough. – Mae West",
    "The mind is everything. What you think you become. – Buddha",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. – Ralph Waldo Emerson",
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. – Buddha",
    "Life is what happens when you\re busy making other plans. – John Lennon",
    "Spread love everywhere you go. Let no one ever come to you without leaving happier. – Mother Teresa",
    "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. – Buddha",
    "The only thing we have to fear is fear itself. – Franklin D. Roosevelt",
    "It does not matter how slowly you go as long as you do not stop. – Confucius",
    "It always seems impossible until it's done. – Nelson Mandela",
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
    "Tell me and I forget. Teach me and I remember. Involve me and I learn. – Benjamin Franklin",
    "In the end, it's not the years in your life that count. It's the life in your years. – Abraham Lincoln",
    "Many of life's failures are people who did not realize how close they were to success when they gave up. – Thomas A. Edison",
    "The only limit to our realization of tomorrow will be our doubts of today. – Franklin D. Roosevelt",
    "Life is what happens when you're busy making other plans. – John Lennon",
    "Get busy living or get busy dying. – Stephen King",
    "You only live once, but if you do it right, once is enough. – Mae West",
    "The mind is everything. What you think you become. – Buddha",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. – Ralph Waldo Emerson",
    "The only way to do great work is to love what you do. – Steve Jobs",
    "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us. – Helen Keller",
    
    "Start where you are. Use what you have. Do what you can. – Arthur Ashe",
    "When you reach the end of your rope, tie a knot in it and hang on. – Franklin D. Roosevelt",
    "Fall seven times and stand up eight. – Japanese Proverb",
    "Everything has beauty, but not everyone can see. – Confucius",
    "Life is not measured by the number of breaths we take, but by the moments that take our breath away. – Maya Angelou",
    "Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy. – Norman Vincent Peale",
    "If you want to lift yourself up, lift up someone else. – Booker T. Washington",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. – Ralph Waldo Emerson",
    "The only way to achieve the impossible is to believe it is possible. – Charles Kingsleigh",
    "Good, better, best. Never let it rest. 'Til your good is better and your better is best. – St. Jerome",
    "The only person you are destined to become is the person you decide to be. – Ralph Waldo Emerson",
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
]
  
  const [genquote, setgenquote] = useState("");

  const generator = () => {
    const a = Math.round(Math.random() * quotes.length);
    setgenquote(quotes[a]);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <Text
        style={{
          marginTop:50,
          fontSize: 23,
          textAlign: "center",
          fontWeight: "bold",
          color: "white",
        }}
      >
        Quote Generator
      </Text>
      <Text style={{ fontSize: 10, textAlign: "center", color: "white",fontStyle:'italic',marginTop:5 }}>
        Developed By Mashhad Rao
      </Text>

      <View style={{alignItems:'center',justifyContent:'center',marginTop:200,marginLeft:20,
        marginRight:20,
      }}>
<Text style={{color:'white',fontSize:20,fontWeight:'bold',lineHeight:30}}>{genquote}</Text>

      </View>

      <View style={{ position: "absolute", bottom: 100 ,left:90}}>
        <Pressable
        onPress={generator}
          style={{
            backgroundColor: "white",
            borderRadius: 20,
           justifyContent:'center',
           alignItems:'center',
            width: 180,
            height: 50,
            elevation:5
          }}
        >
          <Text style={{ color: "black", fontSize: 20, fontWeight: "bold" }}>
            Generate
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default _layout;


