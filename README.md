# OffBeats – The Offbeat Travel Companion App

**OffBeats** is a modular Android-based travel companion application tailored for solo travelers and offbeat tourism enthusiasts. It offers a seamless experience to discover hidden travel spots, book unique homestays, and connect with fellow explorers. The application emphasizes promoting regional tourism—especially in underexplored areas like North Bengal and the Eastern Himalayas.

---

## Vision and Future Scope

OffBeats is more than a travel listing app. Future releases aim to integrate:

- **LLM-based itinerary generation** using user preferences, date ranges, budget constraints, and live weather data.
- **Conversational trip planning** using natural language queries like:  
  _"Plan a 3-day nature trip near Kalimpong under ₹8,000 with homestay options."_
- **AI-driven destination recommendations** based on user behavior, reviews, and trending regional spots.

---

## Demo Video

Watch the demo of the core features:

<video src="./Screen Recording 2025-03-09 104945_compressed.mp4" controls width="100%"></video>

---

## UI Screenshots

### Login Page  
![Login Screen](./Screen%20Recording%202025-03-09%20104945-0.jpg)

### Explore Page  
![Explore Destinations](./Screen%20Recording%202025-03-09%20104945-1.jpg)

### Destination Details  
![Destination Details](./Screen%20Recording%202025-03-09%20104945-2.jpg)

### Homestay Booking  
![Homestay Booking](./Screen%20Recording%202025-03-09%20104945-3.jpg)

### Partner Finder  
![Travel Partner Search](./Screen%20Recording%202025-03-09%20104945-4.jpg)

---

## Key Features

- Discover offbeat and nature-rich destinations
- View curated travel experiences from Eastern India
- Search and book unique homestays from local hosts
- Connect with solo travelers and potential trip companions
- Use AI-generated itineraries and cost breakdowns (Upcoming)

---

## Architecture

The project follows a scalable **MVVM architecture** with modular code separation, reactive UI, and cloud-first backend using Firebase.

UI Layer (Jetpack Compose / XML)
│
├── ViewModel (State Management)
│ └── LiveData / Flow / State
│
├── Repository Layer
│ └── FirebaseService (Firestore, Auth, Storage)
│
└── Remote APIs
├── Google Maps SDK
└── OpenWeather API


---

## Tech Stack

| Layer                | Technology                             |
|----------------------|-----------------------------------------|
| Language             | Kotlin (preferred) / Java               |
| UI                   | Jetpack Compose or XML Layouts          |
| Backend              | Firebase (Auth, Firestore, Storage)     |
| APIs                 | Google Maps SDK, OpenWeather API        |
| Build Tool           | Gradle                                  |
| IDE                  | Android Studio Flamingo or later        |
| State Management     | ViewModel + LiveData / State / Flow     |
| Source Control       | Git + GitHub                            |

---

## Code Examples

### Fetching Destination Data from Firestore

```kotlin
val db = FirebaseFirestore.getInstance()
val destinations = mutableListOf<Destination>()

db.collection("destinations")
    .get()
    .addOnSuccessListener { documents ->
        for (document in documents) {
            val destination = document.toObject(Destination::class.java)
            destinations.add(destination)
        }
        // Update UI or ViewModel here
    }
    .addOnFailureListener { exception ->
        Log.w("Firestore", "Error getting documents: ", exception)
    }
Future Enhancements
Offline map caching for remote regions

User-generated content (reviews, videos)

Admin dashboard to manage destinations and bookings

Multilingual support with MLKit

End-to-end encrypted messaging between users
