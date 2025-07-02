
export const artistCategories = [
  {
    title: "Musicians",
    category: "musician",
    description: "From classical to contemporary, find the perfect musical talent for your event",
    icon: "🎵",
    artistCount: 850,
    imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop"
  },
  {
    title: "Dancers",
    category: "dancer", 
    description: "Professional dancers specializing in various styles and performances",
    icon: "💃",
    artistCount: 420,
    imageUrl: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400&h=300&fit=crop"
  },
  {
    title: "Speakers",
    category: "speaker",
    description: "Inspiring speakers and presenters for corporate and personal events",
    icon: "🎤",
    artistCount: 320,
    imageUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=300&fit=crop"
  },
  {
    title: "DJs",
    category: "dj",
    description: "Professional DJs to keep your party going with the perfect soundtrack",
    icon: "🎧",
    artistCount: 280,
    imageUrl: "https://images.unsplash.com/photo-1571266028243-d220c9df7b79?w=400&h=300&fit=crop"
  }
];

export const mockArtists = [
  {
    id: "1",
    name: "Sarah Johnson",
    category: "musician",
    priceRange: "$500-800/hr",
    location: "New York, NY",
    rating: 4.9,
    reviewCount: 127,
    imageUrl: "https://images.unsplash.com/photo-1494790108755-2616c5e2b3e7?w=300&h=300&fit=crop",
    languages: ["English", "Spanish", "French"],
    bio: "Professional jazz vocalist with 10+ years of experience",
    isVerified: true
  },
  {
    id: "2", 
    name: "Marcus Chen",
    category: "dancer",
    priceRange: "$300-500/hr",
    location: "Los Angeles, CA",
    rating: 4.8,
    reviewCount: 94,
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    languages: ["English", "Mandarin"],
    bio: "Contemporary and hip-hop dancer, choreographer",
    isVerified: true
  },
  {
    id: "3",
    name: "Dr. Amanda Foster",
    category: "speaker",
    priceRange: "$1000-1500/event",
    location: "Chicago, IL", 
    rating: 5.0,
    reviewCount: 203,
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop",
    languages: ["English"],
    bio: "Leadership and motivation speaker, bestselling author",
    isVerified: true
  },
  {
    id: "4",
    name: "DJ Rhythm",
    category: "dj",
    priceRange: "$400-700/hr",
    location: "Miami, FL",
    rating: 4.7,
    reviewCount: 156,
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
    languages: ["English", "Spanish"],
    bio: "Electronic and house music specialist",
    isVerified: false
  },
  {
    id: "5",
    name: "Elena Rodriguez",
    category: "musician",
    priceRange: "$600-900/hr",
    location: "Austin, TX",
    rating: 4.9,
    reviewCount: 89,
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
    languages: ["English", "Spanish"],
    bio: "Classical guitarist and composer",
    isVerified: true
  },
  {
    id: "6",
    name: "Kevin Park",
    category: "dancer",
    priceRange: "$350-550/hr",
    location: "Seattle, WA",
    rating: 4.6,
    reviewCount: 72,
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop",
    languages: ["English", "Korean"],
    bio: "Breakdancing and street dance performer",
    isVerified: false
  },
  {
    id: "7",
    name: "James Wilson",
    category: "speaker",
    priceRange: "$800-1200/event",
    location: "Boston, MA",
    rating: 4.8,
    reviewCount: 145,
    imageUrl: "https://images.unsplash.com/photo-1507038732509-8b8dcdb72632?w=300&h=300&fit=crop",
    languages: ["English"],
    bio: "Technology and innovation keynote speaker",
    isVerified: true
  },
  {
    id: "8",
    name: "DJ Luna",
    category: "dj",
    priceRange: "$450-650/hr",
    location: "San Francisco, CA",
    rating: 4.9,
    reviewCount: 98,
    imageUrl: "https://images.unsplash.com/photo-1494790108755-2616c5e2b3e7?w=300&h=300&fit=crop",
    languages: ["English", "Japanese"],
    bio: "Wedding and corporate event DJ specialist",
    isVerified: true
  }
];

export const submittedArtists = [
  {
    id: "sub1",
    name: "Alex Thompson",
    category: "Musician",
    city: "Portland, OR",
    fee: "$400-600/hr",
    status: "pending",
    submissionDate: "2024-01-15"
  },
  {
    id: "sub2", 
    name: "Maria Gonzalez",
    category: "Dancer",
    city: "Denver, CO",
    fee: "$250-400/hr",
    status: "approved",
    submissionDate: "2024-01-14"
  },
  {
    id: "sub3",
    name: "Robert Kim",
    category: "Speaker",
    city: "Atlanta, GA", 
    fee: "$900-1300/event",
    status: "pending",
    submissionDate: "2024-01-13"
  },
  {
    id: "sub4",
    name: "DJ Phoenix",
    category: "DJ",
    city: "Las Vegas, NV",
    fee: "$500-800/hr",
    status: "rejected",
    submissionDate: "2024-01-12"
  },
  {
    id: "sub5",
    name: "Sophie Laurent",
    category: "Musician",
    city: "Nashville, TN",
    fee: "$550-750/hr",
    status: "approved",
    submissionDate: "2024-01-11"
  }
];
