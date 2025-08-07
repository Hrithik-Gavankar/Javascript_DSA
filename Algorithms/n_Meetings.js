function maxMeetings(start, end) {
  const n = start.length;
  const meetings = [];

  // Step 1: Pair up start and end times into a single array of meetings
  for (let i = 0; i < n; i++) {
    meetings.push({ start: start[i], end: end[i] });
  }

  // Step 2: Sort meetings by end time, and by start time if end times are equal
  meetings.sort((a, b) => {
    if (a.end !== b.end) {
      return a.end - b.end;
    }
    return a.start - b.start;
  });

  // Step 3: Count the maximum number of non-overlapping meetings
  let count = 0;
  let lastEndTime = 0;

  for (const meeting of meetings) {
    if (meeting.start > lastEndTime) {
      console.log(`Meeting: Start = ${meeting.start}, End = ${meeting.end}`);
      count++;
      lastEndTime = meeting.end;
    }
  }

  return count;
}

// Example usage
const start = [1, 3, 0, 5, 8, 5];
const end = [2, 4, 6, 7, 9, 9];

console.log("Maximum meetings:", maxMeetings(start, end));
