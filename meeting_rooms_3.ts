class Room {
  readonly number: number;
  meetings: number[][] = [];
  freeTime: number = 0;

  constructor(number: number) {
    this.number = number;
  }
  addMeeting(meeting: number[]): void {
    this.meetings.push(meeting);
    if (this.freeTime > meeting[0]) {
      this.freeTime = this.freeTime + (meeting[1] - meeting[0]);
    }
    if (this.freeTime <= meeting[0]) {
      this.freeTime = meeting[1];
    }
    // if (this.freeTime === meeting[0]) {

    //   this.freeTime += meeting[1];
    // }
  }
}

function mostBooked(n: number, meetings: number[][]): number {
  const rooms: Room[] = Array(n);

  for (let i = 0; i < n; i++) {
    rooms[i] = new Room(i);
  }

  meetings.sort((a, b) => a[0] - b[0]);

  function assingnMeeting(rooms: Room[], meeting: number[]) {
    rooms.sort((r1, r2) => {
      if (r1.freeTime <= meeting[0] && r2.freeTime <= meeting[0])
        return r1.number - r2.number;

      if (r1.freeTime > meeting[0] && r2.freeTime > meeting[0]) {
        if (r1.freeTime === r2.freeTime) {
          return r1.number - r2.number;
        }
        return r1.freeTime - r2.freeTime;
      } else
        return r1.freeTime <= meeting[0]
          ? -1
          : r2.freeTime <= meeting[0]
          ? 1
          : 0;
    });

    console.log("**********************************************");
    rooms[0].addMeeting(meeting);

    console.log(rooms[0]);
    console.log(rooms[1]);
    console.log(rooms[2]);
  }

  for (let i = 0; i < meetings.length; i++) {
    const meeting = meetings[i];
    assingnMeeting(rooms, meeting);
  }

  rooms.sort((r1, r2) => {
    if (r1.meetings.length > r2.meetings.length) {
      return -1;
    } else if (r1.meetings.length < r2.meetings.length) {
      return 1;
    }
    return r1.number - r2.number;
  });

  console.log(rooms[0]);

  return rooms[0].number;
}

console.log(
  mostBooked(3, [
    [1, 27],
    [29, 49],
    [47, 49],
    [41, 43],
    [15, 36],
    [11, 15],
  ])
);
