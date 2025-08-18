// Implement Array Pagination & Filtering (10 mins)
// Sample data: https://pastebin.com/BWiZJQZ3
// Write a function getCandidates({ role, location, page, limit }) that:
// Filters by role (case-insensitive, partial match allowed).
// Filters by location (exact match).
// Returns results paginated by page and limit.
// Also returns totalCount (number of matching candidates).

const candidates = [
  { name: "Aman", role: "Frontend", location: "Delhi", experience: 2 },
  { name: "Neha", role: "Backend", location: "Bangalore", experience: 3 },
  { name: "Rahul", role: "Fullstack", location: "Delhi", experience: 5 },
  { name: "Priya", role: "Frontend", location: "Mumbai", experience: 1 },
  { name: "Karan", role: "Frontend", location: "Delhi", experience: 4 },
  { name: "Isha", role: "Backend", location: "Hyderabad", experience: 6 },
  { name: "Vikas", role: "Fullstack", location: "Delhi", experience: 3 },
  { name: "Meena", role: "Frontend", location: "Chennai", experience: 2 },
  { name: "Suresh", role: "Backend", location: "Pune", experience: 4 },
  { name: "Alok", role: "Frontend", location: "Delhi", experience: 5 },

  { name: "Rani", role: "Backend", location: "Bangalore", experience: 2 },
  { name: "Rohit", role: "Fullstack", location: "Mumbai", experience: 7 },
  { name: "Sneha", role: "Frontend", location: "Delhi", experience: 1 },
  { name: "Manoj", role: "Backend", location: "Hyderabad", experience: 5 },
  { name: "Tina", role: "Frontend", location: "Delhi", experience: 3 },
  { name: "Deepak", role: "Fullstack", location: "Chennai", experience: 4 },
  { name: "Simran", role: "Backend", location: "Pune", experience: 6 },
  { name: "Ashok", role: "Frontend", location: "Bangalore", experience: 2 },
  { name: "Nisha", role: "Frontend", location: "Delhi", experience: 5 },
  { name: "Anil", role: "Backend", location: "Mumbai", experience: 3 },
];

function getCandidates({ role, location, page, limit }) {
  // logic

  //  1. filter by role and location first.

  const filteredCandidates = candidates.filter((candidate) => {
    return {
      role: candidate.role.toLowerCase().includes(role.toLowerCase()),
      location: candidate.location === location,
    };
  });

  const totalCount = filteredCandidates.length;
  const startIndex = (page - 1) * limit;
  const result = filteredCandidates.slice(startIndex, startIndex + limit);

  // 2. using the page and limit, slice the array and return the result with totalCount
  return { result, totalCount, page, limit };
}
