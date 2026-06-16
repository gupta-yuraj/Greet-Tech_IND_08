// src/data/videos.js

const videoTitles = [
  "Shrusti Singing a Song",
  "Shinchan Dialogue",
  "Shrusti & Akashata Singing Together",
  "Dance 1",
  "Shinchan 2",
  "Sir singing",
  "Nothing",
  "Nagin Dance",
  "Lolipop Song",
  "Dance 2",
  "Sir & Shinchan Dance on Vishnu Song Part-1",
  "Neelu Singing a Song",
  "Shrusti 2",
  "Sir & shinchan Dance on Vishnu Song Part-2",
  "Sir Ki Dard Bhari Sayari",
  "Sagar Song- 'Sanam Re'",
  "Sir ki Dard Bhari Sayari 2",
  "Chikni Chameli Dance",
  "Office Crush 💕",
  "Karthik Subi Dance",
  "Saturday Enjoyment",
  "Neelu, Akashata & Konda",
  "Neelu, Akashata & Konda 2",
  "Snap",
  "VloG",
  "Empire Resturant",
  "Empire Resturant 2",
  "Empire Resturant 3",
  "Akashta Ka Rona 😭😩 Part-1",
  "Akashta Ka Rona 😭😩 Part-2"
];

// Replace these placeholders with your actual public URLs from your Supabase 'memories' bucket
const videoUrls = [
  "https://fdmsyalfbelteocxmdeo.supabase.co/storage/v1/object/public/Ind%20videos/1.mp4",         // 1  - Shrusti Singing a Song
  "https://fdmsyalfbelteocxmdeo.supabase.co/storage/v1/object/public/Ind%20videos/2.mp4",         // 2  - Shinchan Dialogue
  "https://fdmsyalfbelteocxmdeo.supabase.co/storage/v1/object/public/Ind%20videos/3.mp4",         // 3  - Shrusti & Akashata Singing Together
  "https://fdmsyalfbelteocxmdeo.supabase.co/storage/v1/object/public/Ind%20videos/4.mp4",         // 4  - Dance 1
  "https://fdmsyalfbelteocxmdeo.supabase.co/storage/v1/object/public/Ind%20videos/5.mp4",         // 5  - Shinchan 2
  "https://fdmsyalfbelteocxmdeo.supabase.co/storage/v1/object/public/Ind%20videos/6.mp4",         // 6  - Sir singing
  "https://fdmsyalfbelteocxmdeo.supabase.co/storage/v1/object/public/Ind%20videos/7.mp4",         // 7  - Nothing
  "https://fdmsyalfbelteocxmdeo.supabase.co/storage/v1/object/public/Ind%20videos/8.mp4",         // 8  - Nagin Dance
  "https://fdmsyalfbelteocxmdeo.supabase.co/storage/v1/object/public/Ind%20videos/9.mp4",         // 9  - Lolipop Song
  "https://fdmsyalfbelteocxmdeo.supabase.co/storage/v1/object/public/Ind%20videos/10.mp4",        // 10 - Dance 2
  "https://fdmsyalfbelteocxmdeo.supabase.co/storage/v1/object/public/Ind%20videos/11.mp4",        // 11 - Sir & Shinchan Dance on Vishnu Song Part-1
  "https://fdmsyalfbelteocxmdeo.supabase.co/storage/v1/object/public/Ind%20videos/12.mp4",        // 12 - Neelu Singing a Song
  "https://fdmsyalfbelteocxmdeo.supabase.co/storage/v1/object/public/Ind%20videos/13.mp4",        // 13 - Shrusti 2
  "https://fdmsyalfbelteocxmdeo.supabase.co/storage/v1/object/public/Ind%20videos/14.mp4",        // 14 - Sir & shinchan Dance on Vishnu Song Part-2
  "https://fdmsyalfbelteocxmdeo.supabase.co/storage/v1/object/public/Ind%20videos/15.mp4",        // 15 - Sir Ki Dard Bhari Sayari
  "https://fdmsyalfbelteocxmdeo.supabase.co/storage/v1/object/public/Ind%20videos/16.mp4",        // 16 - Sagar Song- 'Sanam Re'
  "https://fdmsyalfbelteocxmdeo.supabase.co/storage/v1/object/public/Ind%20videos/17.mp4",           // 17 - Sir ki Dard Bhari Sayari 2
  "https://fdmsyalfbelteocxmdeo.supabase.co/storage/v1/object/public/Ind%20videos/18.mp4",         // 18 - Chikni Chameli Dance
  "https://fdmsyalfbelteocxmdeo.supabase.co/storage/v1/object/public/Ind%20videos/19.mp4",           // 19 - Office Crush 💕
  "https://fdmsyalfbelteocxmdeo.supabase.co/storage/v1/object/public/Ind%20videos/20.mp4",           // 20 - Karthik Subi Dance
  "https://fdmsyalfbelteocxmdeo.supabase.co/storage/v1/object/public/Ind%20videos/21.mp4",     // 21 - Saturday Enjoyment
  "https://fdmsyalfbelteocxmdeo.supabase.co/storage/v1/object/public/Ind%20videos/22.mp4", // 22 - Neelu, Akashata & Konda
  "https://fdmsyalfbelteocxmdeo.supabase.co/storage/v1/object/public/Ind%20videos/23.mp4", // 23 - Neelu, Akashata & Konda 2
  "https://fdmsyalfbelteocxmdeo.supabase.co/storage/v1/object/public/Ind%20videos/24.mp4",                   // 24 - Snap
  "https://fdmsyalfbelteocxmdeo.supabase.co/storage/v1/object/public/Ind%20videos/25.mp4",                   // 25 - VloG
  "https://fdmsyalfbelteocxmdeo.supabase.co/storage/v1/object/public/Ind%20videos/26.mp4",    // 26 - Empire Resturant
  "https://fdmsyalfbelteocxmdeo.supabase.co/storage/v1/object/public/Ind%20videos/27.mp4",    // 27 - Empire Resturant 2
  "https://fdmsyalfbelteocxmdeo.supabase.co/storage/v1/object/public/Ind%20videos/28.mp4",    // 28 - Empire Resturant 3
  "https://fdmsyalfbelteocxmdeo.supabase.co/storage/v1/object/public/Ind%20videos/29.mp4",        // 29 - Akashta Ka Rona 😭😩 Part-1
  "https://fdmsyalfbelteocxmdeo.supabase.co/storage/v1/object/public/Ind%20videos/30.mp4",        // 30 - Akashta Ka Rona 😭😩 Part-2
];

export const videoJournal = Array.from({ length: 30 }, (_, index) => {
  const num = index + 1;
  
  // Categorization logic based on video item numbers
  let category = "General Memories";
  if (num <= 5) {
    category = "Training Clips";
  } else if (num <= 10) {
    category = "Celebrations";
  } else if (num >= 26 && num <= 28) {
    category = "Food Vlogs";
  }

  return {
    id: `V${String(num).padStart(3, '0')}`,
    title: videoTitles[index] || `Memory Clip ${num}`,
    category: category,
    videoUrl: videoUrls[index] || "", 
  };
}); // <-- This closing parenthesis was what fixed the parse error!