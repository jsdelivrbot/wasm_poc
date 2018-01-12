import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.tickets = new Array(
      "13 69 77 23 20",
      "71 76 18 29 21",
      "13 61 28 81 67",
      "72 10 12 41 59",
      "6 20 52 29 41",
      "29 76 14 77 12",
      "46 12 22 63 71",
      "15 79 87 5 8",
      "67 16 31 10 32",
      "60 52 47 67 24",
      "23 38 69 85 4",
      "32 80 46 42 15",
      "54 74 90 25 68",
      "82 9 61 38 6",
      "58 35 9 29 23",
      "86 24 80 28 40",
      "15 11 46 7 78",
      "47 72 17 7 90",
      "5 28 49 31 18",
      "11 65 50 4 87",
      "57 53 30 26 2",
      "11 81 82 20 40",
      "20 16 32 3 89",
      "33 43 29 7 11",
      "64 39 56 33 59",
      "56 19 27 64 42",
      "39 23 56 19 52",
      "72 63 3 17 1",
      "75 54 21 90 41",
      "80 53 11 14 54",
      "23 76 21 25 60",
      "63 85 26 53 59",
      "66 52 32 16 39",
      "15 61 44 17 19",
      "52 42 34 61 36",
      "43 69 65 55 89",
      "55 52 46 64 25",
      "43 81 23 21 8",
      "61 87 29 48 26",
      "15 11 56 48 57",
      "44 14 58 6 90",
      "82 61 35 16 79",
      "2 14 20 38 42",
      "72 40 38 54 65",
      "90 1 45 43 60",
      "85 10 31 29 21",
      "16 80 54 5 22",
      "43 80 10 24 65",
      "15 3 26 24 29",
      "29 45 52 14 71",
      "56 90 76 69 7",
      "18 69 9 27 14",
      "84 68 29 71 35",
      "27 51 72 84 62",
      "76 54 9 57 62",
      "14 52 40 9 27",
      "77 14 52 34 55",
      "71 48 30 54 12",
      "19 53 34 78 55",
      "43 86 84 8 64",
      "89 71 70 42 47",
      "66 54 59 74 29",
      "20 85 49 33 18",
      "80 84 69 21 67",
      "65 71 42 48 14",
      "29 63 67 56 6",
      "86 50 48 43 26",
      "14 62 20 78 58",
      "36 39 1 10 16",
      "33 46 39 2 77",
      "73 72 85 40 83",
      "75 33 73 19 88",
      "18 12 25 87 16",
      "46 7 56 81 30",
      "43 22 48 8 68",
      "54 23 9 17 13",
      "32 58 54 63 9",
      "18 34 61 22 42",
      "36 57 71 53 5",
      "5 2 43 24 25",
      "68 31 83 84 7",
      "41 43 23 21 63",
      "31 15 44 82 8",
      "55 63 25 69 71",
      "10 50 30 26 4",
      "21 2 46 74 68",
      "90 89 14 50 62",
      "17 87 28 68 7",
      "53 37 54 60 61",
      "27 4 58 11 32",
      "86 43 4 31 83",
      "19 12 11 16 47",
      "3 10 7 53 86",
      "44 68 18 60 78",
      "55 62 21 17 16",
      "60 10 55 68 20",
      "87 40 58 55 26",
      "80 10 56 78 29",
      "12 39 15 68 60",
      "25 81 89 2 47",
      "83 45 3 70 58",
      "16 62 33 85 54",
      "83 39 62 20 64",
      "13 9 41 37 10",
      "52 20 29 79 67",
      "12 28 11 40 56",
      "80 7 34 5 60",
      "88 69 45 42 17",
      "70 37 50 72 80",
      "59 89 34 71 8",
      "67 55 26 78 37",
      "23 36 52 40 38",
      "32 68 2 42 7",
      "65 37 39 58 30",
      "72 9 15 24 39",
      "23 90 58 50 29",
      "65 43 35 1 44",
      "76 51 80 3 72",
      "43 49 25 75 58",
      "63 85 32 5 87",
      "53 9 88 76 81",
      "73 88 45 12 75",
      "72 54 6 61 26",
      "36 25 71 59 7",
      "75 69 38 68 43",
      "90 17 83 30 31",
      "79 63 1 54 33",
      "87 65 35 28 80",
      "4 49 77 2 61",
      "15 14 70 64 85",
      "19 1 64 78 62",
      "29 65 32 35 85",
      "17 45 79 10 9",
      "23 60 30 84 52",
      "29 47 3 71 18",
      "89 21 18 28 57",
      "18 23 86 52 74",
      "74 28 24 29 54",
      "65 27 13 7 80",
      "51 13 27 40 72",
      "4 51 80 82 39",
      "50 10 9 36 39",
      "28 21 24 81 82",
      "50 84 36 52 82",
      "62 88 57 45 16",
      "11 29 5 63 80",
      "40 89 23 35 77",
      "80 10 27 4 87",
      "60 4 87 31 28",
      "55 35 62 40 46",
      "4 68 20 5 46",
      "67 22 64 34 4",
      "25 15 38 35 66",
      "8 11 44 66 32",
      "27 82 15 9 80",
      "54 6 58 87 25",
      "8 83 53 82 78",
      "9 43 81 56 30",
      "10 62 24 25 55",
      "89 22 49 52 28",
      "25 63 64 76 20",
      "34 62 78 57 55",
      "31 38 42 7 65",
      "70 84 53 73 42",
      "85 77 46 6 82",
      "25 11 62 47 74",
      "3 86 42 9 55",
      "85 89 76 15 32",
      "89 20 53 86 39",
      "8 10 59 52 24",
      "63 41 60 64 7",
      "30 38 15 67 27",
      "38 76 73 34 36",
      "6 8 84 29 20",
      "11 65 22 49 86",
      "29 19 62 7 13",
      "37 62 59 80 14",
      "54 32 73 50 11",
      "17 56 12 54 18",
      "55 53 42 66 25",
      "65 20 38 12 59",
      "27 31 68 13 59",
      "22 70 41 32 11",
      "26 54 46 85 88",
      "49 69 82 32 79",
      "63 33 76 6 74",
      "77 27 14 88 71",
      "51 31 3 13 29",
      "32 71 86 12 79",
      "9 88 81 34 49",
      "61 40 57 43 15",
      "68 85 71 50 77",
      "49 54 41 86 35",
      "36 21 56 33 24",
      "10 14 82 72 39",
      "84 46 1 65 2",
      "88 28 81 32 49",
      "49 61 51 40 84",
      "72 70 38 20 25",
      "43 52 74 53 47",
      "29 32 27 5 35",
      "10 48 19 85 70",
      "49 70 76 27 43",
      "63 56 54 6 90",
      "62 5 39 16 27",
      "28 63 33 76 57",
      "47 2 89 44 7",
      "47 66 51 88 26",
      "80 17 58 77 75",
      "82 76 50 8 60",
      "20 30 4 64 53",
      "9 25 24 17 68",
      "84 12 15 9 90",
      "48 7 66 11 45",
      "35 46 68 45 63",
      "23 35 16 15 24",
      "10 7 70 3 50",
      "66 52 31 69 56",
      "4 22 27 59 56",
      "81 39 70 82 61",
      "52 87 75 89 82",
      "44 3 78 40 43",
      "42 61 59 86 24",
      "29 44 26 84 53",
      "5 50 37 75 90",
      "24 60 11 35 47",
      "25 59 53 18 3",
      "51 38 10 64 62",
      "55 76 52 13 58",
      "47 14 22 90 64",
      "86 51 59 25 72",
      "17 46 61 3 45",
      "41 48 29 62 5",
      "61 7 68 15 82",
      "23 67 75 78 12",
      "31 25 22 62 82",
      "19 35 47 24 51",
      "73 52 24 49 14",
      "7 79 42 22 41",
      "11 88 5 57 24",
      "76 78 46 63 8",
      "37 36 45 76 72",
      "40 25 2 46 36",
      "17 25 1 49 88",
      "55 77 60 44 26",
      "33 50 73 21 74",
      "1 49 6 7 2",
      "34 1 35 33 28",
      "36 58 82 9 17",
      "40 9 71 12 27",
      "36 20 76 7 33",
      "80 76 78 23 67",
      "48 37 55 4 52",
      "60 71 21 49 27",
      "31 50 83 37 47",
      "3 4 40 70 24",
      "32 62 19 74 61",
      "19 38 76 20 25",
      "1 56 55 37 90",
      "34 60 21 40 46",
      "38 70 7 11 28",
      "84 12 40 49 71",
      "48 50 43 65 35",
      "77 28 11 81 74",
      "25 43 32 3 82",
      "29 48 39 41 47",
      "80 77 67 81 35",
      "21 50 7 51 48",
      "46 38 30 43 87",
      "31 37 47 90 57",
      "5 81 74 51 62",
      "81 41 67 30 87",
      "55 12 86 77 62",
      "50 36 7 73 46",
      "80 71 90 87 11",
      "36 9 64 12 61",
      "63 5 45 29 1",
      "85 28 22 77 50",
      "65 4 76 8 63",
      "27 51 70 20 73",
      "29 28 26 42 68",
      "51 13 49 40 24",
      "77 51 80 24 13",
      "80 36 81 7 41",
      "46 18 52 89 36",
      "65 12 84 69 30",
      "56 1 61 57 88",
      "31 16 6 14 88",
      "18 6 11 82 62",
      "53 57 44 76 56",
      "49 12 42 65 63",
      "31 8 64 1 25",
      "40 28 29 83 57",
      "45 87 14 83 70",
      "38 69 56 90 26",
      "44 45 56 28 32",
      "6 20 69 21 19",
      "48 62 16 26 27",
      "57 24 4 10 27",
      "8 1 86 19 55",
      "28 29 72 14 77",
      "81 57 25 17 41",
      "67 23 87 63 8",
      "19 18 1 39 6",
      "50 13 3 12 80",
      "36 19 22 72 24",
      "46 82 66 7 8",
      "30 46 65 34 68",
      "63 28 81 5 14",
      "56 8 64 66 29",
      "15 47 50 32 81",
      "46 4 75 18 66",
      "59 36 15 67 46",
      "71 64 34 62 37",
      "15 48 89 57 78",
      "17 11 52 54 25",
      "81 54 64 31 33",
      "80 81 34 11 35",
      "38 49 9 56 65",
      "2 3 32 52 36",
      "75 73 83 20 40",
      "42 84 8 9 43",
      "44 55 83 73 10",
      "20 10 83 75 38",
      "67 16 21 79 60",
      "33 71 77 47 1",
      "39 84 49 77 43",
      "88 12 47 39 20",
      "38 43 5 53 57",
      "90 78 38 79 50",
      "9 81 28 37 61",
      "44 90 36 24 40",
      "83 70 49 25 15",
      "31 3 89 43 4",
      "49 90 65 41 68",
      "17 18 55 49 78",
      "87 84 86 65 34",
      "63 68 79 1 26",
      "59 13 66 33 57",
      "36 80 55 73 51",
      "31 74 23 5 78",
      "55 61 23 34 1",
      "35 45 62 61 10",
      "67 62 17 43 26",
      "80 3 67 2 21",
      "85 81 72 56 21",
      "32 36 72 16 10",
      "89 31 5 1 51",
      "44 84 70 2 73",
      "2 49 67 26 15",
      "31 46 79 64 66",
      "28 3 71 24 11",
      "59 11 25 9 78",
      "15 29 71 26 80",
      "17 83 48 1 37",
      "43 11 44 75 64",
      "18 20 8 62 40",
      "75 70 16 28 14",
      "62 5 50 74 84",
      "73 86 38 88 6",
      "36 64 90 44 37",
      "50 42 8 26 13",
      "89 74 16 9 40",
      "50 17 79 57 40",
      "79 24 38 90 27",
      "50 34 26 38 85",
      "61 62 77 55 74",
      "37 47 63 51 8",
      "86 61 8 73 17",
      "89 73 46 13 67",
      "18 35 10 67 50",
      "39 28 67 6 34",
      "82 4 90 63 45",
      "6 46 59 9 36",
      "85 47 75 10 36",
      "6 84 51 63 68",
      "31 22 78 90 33",
      "29 27 70 84 26",
      "17 35 44 14 79",
      "27 88 54 1 47",
      "62 37 32 42 9",
      "49 48 10 22 35",
      "53 12 83 8 75",
      "81 64 24 79 42",
      "15 83 58 88 60",
      "62 46 32 34 20",
      "12 19 46 33 90",
      "6 71 80 43 83",
      "22 34 69 84 26",
      "68 14 6 75 77",
      "27 38 17 16 55",
      "54 3 68 62 73",
      "51 56 35 48 44",
      "15 66 45 10 54",
      "4 17 68 48 5",
      "85 59 38 55 13",
      "46 74 43 63 1",
      "45 14 54 27 39",
      "47 19 87 80 11",
      "9 32 30 19 27",
      "37 62 67 6 41",
      "18 44 26 7 22",
      "68 86 60 83 33",
      "57 59 36 18 5",
      "43 65 85 27 54",
      "28 3 57 35 58",
      "57 62 81 27 86",
      "84 36 3 79 4",
      "86 9 39 29 47",
      "44 75 2 80 46",
      "36 88 43 8 85",
      "24 18 28 37 45",
      "11 52 67 41 30",
      "80 88 7 57 69",
      "48 42 5 13 38",
      "6 82 17 55 20",
      "25 37 29 36 5",
      "31 16 56 6 33",
      "86 47 64 84 43",
      "63 25 39 20 75",
      "59 13 57 78 49",
      "32 18 15 9 80",
      "22 30 42 11 71",
      "83 9 2 87 27",
      "28 26 56 49 58",
      "5 53 74 38 87",
      "20 32 26 6 28",
      "51 21 17 4 29",
      "72 12 73 20 51",
      "38 19 67 89 35",
      "85 70 1 21 82",
      "87 12 15 47 13",
      "64 62 46 28 78",
      "73 61 26 79 21",
      "59 38 21 83 79",
      "26 57 25 53 42",
      "74 13 2 57 28",
      "32 70 89 43 81",
      "40 45 37 74 38",
      "11 88 32 1 81",
      "64 60 84 32 62",
      "54 11 28 38 47",
      "45 70 25 12 41",
      "64 77 55 23 57",
      "78 14 40 32 82",
      "88 60 54 37 82",
      "48 30 52 50 43",
      "73 21 55 75 7",
      "3 87 40 60 79",
      "48 42 59 77 15",
      "78 41 26 90 13",
      "85 76 78 24 49",
      "70 44 8 80 26",
      "51 31 74 55 72",
      "66 67 45 9 82",
      "70 53 56 79 36",
      "13 67 80 60 8",
      "68 62 21 3 88",
      "38 10 5 69 16",
      "4 63 26 17 2",
      "23 77 78 28 71",
      "74 16 49 69 41",
      "39 79 31 83 21",
      "40 10 20 32 87",
      "45 5 30 86 66",
      "74 89 54 60 56",
      "79 15 86 78 20",
      "35 32 27 42 31",
      "49 24 65 88 72",
      "35 36 41 34 19",
      "49 46 37 54 72",
      "39 73 82 84 55",
      "73 72 11 64 19",
      "48 4 11 69 15",
      "74 47 67 59 43",
      "76 29 37 55 83",
      "22 44 24 14 58",
      "43 90 60 31 78",
      "53 56 54 72 74",
      "39 47 32 63 5",
      "61 67 35 40 8",
      "60 13 66 14 73",
      "43 78 29 44 69",
      "60 2 90 30 1",
      "8 86 42 85 78",
      "88 64 85 87 19",
      "2 62 36 16 77",
      "81 55 7 22 89",
      "58 32 31 16 61",
      "35 72 36 28 13",
      "82 22 31 6 21",
      "26 15 28 12 32",
      "22 82 80 39 18",
      "34 80 65 25 51",
      "55 15 44 76 20",
      "32 3 79 90 10",
      "8 11 88 18 81",
      "86 44 26 49 6",
      "30 39 46 35 54",
      "3 45 71 18 78"
    );

    this.state = { ticketCount: this.tickets.length };
  }

  render() {
    return (
      <div>Number of Lottery tickets: {this.state.ticketCount}</div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
