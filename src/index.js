import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.tickets = new Array(
      [49, 84, 5, 4, 87],
      [33, 80, 31, 55, 42],
      [31, 19, 59, 58, 72],
      [63, 30, 53, 81, 78],
      [55, 15, 32, 52, 17],
      [78, 42, 87, 10, 83],
      [48, 43, 71, 21, 60],
      [54, 41, 22, 57, 17],
      [82, 58, 15, 42, 3],
      [13, 57, 80, 78, 3],
      [76, 89, 47, 85, 41],
      [6, 16, 47, 17, 42],
      [65, 9, 76, 14, 48],
      [86, 83, 89, 27, 3],
      [53, 1, 69, 88, 34],
      [64, 76, 89, 48, 84],
      [69, 54, 13, 2, 56],
      [78, 84, 51, 20, 49],
      [7, 18, 13, 12, 48],
      [33, 35, 16, 17, 10],
      [83, 64, 57, 11, 58],
      [21, 52, 60, 67, 15],
      [30, 19, 89, 13, 39],
      [70, 46, 86, 22, 34],
      [6, 41, 47, 12, 33],
      [26, 59, 39, 18, 49],
      [29, 1, 80, 5, 60],
      [25, 22, 36, 39, 30],
      [19, 4, 53, 27, 26],
      [71, 51, 38, 85, 77],
      [11, 67, 13, 26, 33],
      [81, 70, 9, 3, 65],
      [80, 73, 47, 85, 34],
      [71, 87, 7, 55, 2],
      [68, 79, 76, 66, 69],
      [11, 85, 45, 74, 23],
      [86, 64, 77, 32, 18],
      [64, 61, 16, 20, 79],
      [1, 83, 19, 40, 21],
      [38, 6, 41, 70, 20],
      [16, 71, 26, 80, 48],
      [26, 35, 76, 73, 2],
      [80, 20, 66, 11, 54],
      [39, 22, 83, 74, 75],
      [47, 73, 16, 39, 31],
      [33, 84, 85, 47, 40],
      [52, 4, 21, 90, 42],
      [29, 57, 13, 60, 1],
      [69, 68, 28, 2, 83],
      [19, 89, 67, 78, 60],
      [12, 14, 76, 86, 47],
      [57, 21, 7, 65, 59],
      [4, 11, 39, 90, 86],
      [8, 59, 70, 43, 19],
      [69, 34, 4, 85, 54],
      [11, 72, 13, 77, 3],
      [15, 12, 32, 23, 19],
      [44, 22, 85, 56, 66],
      [74, 2, 75, 67, 88],
      [47, 77, 81, 21, 26],
      [73, 9, 54, 36, 63],
      [86, 64, 80, 87, 65],
      [19, 67, 17, 21, 84],
      [36, 43, 34, 8, 39],
      [30, 5, 52, 86, 21],
      [70, 35, 21, 12, 45],
      [71, 87, 27, 89, 56],
      [23, 67, 35, 68, 87],
      [23, 63, 83, 60, 22],
      [58, 40, 54, 73, 89],
      [60, 12, 21, 37, 51],
      [66, 84, 79, 14, 56],
      [29, 42, 55, 56, 11],
      [76, 1, 36, 65, 10],
      [24, 83, 63, 74, 84],
      [5, 61, 16, 24, 86],
      [75, 59, 3, 69, 83],
      [46, 26, 76, 78, 49],
      [39, 1, 67, 26, 36],
      [33, 72, 27, 64, 44],
      [35, 81, 63, 87, 55],
      [2, 38, 43, 85, 19],
      [34, 14, 42, 48, 8],
      [55, 66, 29, 25, 78],
      [88, 74, 86, 45, 3],
      [15, 49, 6, 37, 61],
      [13, 79, 7, 31, 39],
      [25, 52, 43, 19, 56],
      [84, 55, 30, 61, 65],
      [9, 55, 24, 2, 1],
      [38, 43, 10, 73, 58],
      [54, 10, 77, 58, 20],
      [44, 40, 87, 71, 88],
      [30, 38, 25, 69, 41],
      [7, 41, 19, 86, 89],
      [59, 76, 3, 26, 23],
      [45, 13, 89, 87, 56],
      [4, 49, 22, 68, 67],
      [87, 63, 67, 39, 28],
      [16, 10, 12, 67, 53],
      [38, 84, 70, 39, 4],
      [76, 16, 6, 83, 35],
      [23, 85, 54, 84, 47],
      [21, 50, 14, 77, 32],
      [61, 64, 31, 51, 18],
      [12, 46, 56, 66, 6],
      [8, 55, 21, 58, 14],
      [1, 35, 84, 52, 13],
      [15, 63, 5, 16, 86],
      [15, 2, 14, 57, 83],
      [56, 42, 77, 33, 67],
      [57, 65, 21, 13, 64],
      [19, 37, 49, 73, 47],
      [1, 15, 20, 80, 24],
      [81, 66, 11, 69, 80],
      [8, 15, 76, 60, 14],
      [13, 52, 57, 48, 55],
      [63, 82, 53, 22, 7],
      [75, 36, 54, 51, 41],
      [89, 15, 57, 77, 66],
      [24, 70, 36, 58, 32],
      [21, 17, 88, 22, 27],
      [74, 18, 7, 71, 20],
      [20, 61, 35, 48, 44],
      [54, 78, 2, 82, 90],
      [82, 16, 39, 32, 66],
      [18, 52, 78, 28, 9],
      [12, 46, 39, 38, 82],
      [32, 34, 2, 48, 4],
      [80, 40, 1, 48, 73],
      [18, 44, 88, 83, 69],
      [63, 30, 56, 62, 35],
      [30, 73, 53, 49, 6],
      [2, 86, 39, 68, 78],
      [44, 38, 42, 41, 1],
      [61, 31, 58, 87, 64],
      [16, 86, 71, 37, 42],
      [54, 8, 23, 18, 37],
      [15, 33, 49, 14, 53],
      [80, 53, 11, 72, 5],
      [26, 53, 42, 64, 44],
      [26, 69, 48, 64, 1],
      [14, 72, 23, 30, 87],
      [87, 3, 89, 43, 67],
      [27, 2, 80, 37, 43],
      [45, 77, 1, 8, 38],
      [55, 68, 22, 57, 61],
      [41, 48, 66, 67, 45],
      [61, 74, 78, 10, 5],
      [1, 44, 10, 78, 31],
      [68, 45, 1, 35, 12],
      [65, 50, 66, 80, 11],
      [16, 66, 33, 62, 1],
      [8, 63, 25, 65, 51],
      [69, 32, 53, 71, 86],
      [41, 5, 87, 58, 73],
      [27, 8, 60, 11, 4],
      [53, 87, 86, 49, 20],
      [88, 22, 80, 4, 82],
      [85, 53, 78, 36, 64],
      [11, 85, 21, 4, 50],
      [86, 82, 9, 33, 37],
      [61, 65, 13, 17, 49],
      [42, 55, 37, 63, 29],
      [4, 59, 66, 48, 39],
      [84, 9, 51, 13, 50],
      [47, 86, 49, 11, 50],
      [38, 17, 65, 58, 87],
      [6, 38, 36, 23, 80],
      [14, 81, 57, 78, 65],
      [80, 28, 82, 45, 72],
      [72, 71, 6, 48, 46],
      [61, 10, 70, 16, 40],
      [89, 4, 78, 26, 45],
      [22, 38, 41, 15, 3],
      [72, 31, 69, 62, 23],
      [27, 36, 62, 5, 76],
      [14, 26, 88, 51, 35],
      [44, 32, 18, 85, 75],
      [59, 6, 53, 31, 24],
      [50, 13, 77, 73, 30],
      [29, 64, 51, 35, 3],
      [72, 75, 43, 82, 19],
      [50, 6, 43, 84, 38],
      [27, 50, 37, 28, 7],
      [14, 47, 24, 67, 78],
      [4, 40, 38, 66, 83],
      [22, 51, 71, 29, 18],
      [59, 71, 42, 23, 26],
      [57, 6, 37, 40, 65],
      [8, 11, 84, 5, 50],
      [70, 36, 42, 12, 4],
      [15, 11, 43, 87, 19],
      [18, 22, 59, 82, 62],
      [17, 74, 13, 78, 65],
      [76, 17, 85, 11, 58],
      [81, 63, 44, 71, 43],
      [70, 75, 4, 71, 85],
      [13, 77, 26, 76, 21],
      [46, 61, 33, 65, 87],
      [14, 78, 29, 20, 76],
      [8, 83, 19, 65, 90],
      [3, 16, 59, 35, 60],
      [5, 48, 1, 16, 62],
      [50, 19, 51, 24, 43],
      [86, 37, 67, 14, 28],
      [5, 14, 37, 10, 77],
      [2, 11, 42, 3, 22],
      [44, 58, 67, 47, 57],
      [60, 34, 9, 85, 80],
      [35, 13, 4, 39, 90],
      [48, 9, 33, 3, 26],
      [73, 79, 88, 43, 36],
      [51, 68, 22, 9, 52],
      [55, 77, 42, 74, 61],
      [28, 55, 30, 65, 61],
      [68, 49, 60, 33, 78],
      [64, 9, 56, 44, 86],
      [85, 75, 15, 38, 16],
      [65, 43, 35, 31, 59],
      [63, 29, 24, 74, 6],
      [2, 6, 3, 17, 75],
      [69, 55, 42, 31, 39],
      [41, 75, 24, 50, 14],
      [14, 84, 33, 56, 74],
      [53, 35, 63, 26, 68],
      [61, 33, 19, 26, 2],
      [46, 11, 67, 79, 62],
      [56, 81, 90, 84, 44],
      [10, 75, 40, 24, 12],
      [53, 37, 24, 69, 21],
      [3, 7, 73, 17, 83],
      [78, 39, 59, 1, 70],
      [3, 39, 55, 2, 12],
      [76, 38, 6, 58, 41],
      [18, 52, 68, 11, 64],
      [81, 44, 30, 23, 48],
      [67, 62, 28, 82, 77],
      [73, 57, 34, 74, 45],
      [89, 19, 41, 44, 31],
      [13, 26, 75, 33, 1],
      [30, 66, 60, 22, 44],
      [38, 79, 41, 55, 20],
      [52, 39, 17, 76, 60],
      [17, 4, 36, 19, 89],
      [38, 10, 11, 79, 45],
      [70, 52, 37, 4, 51],
      [24, 81, 84, 34, 58],
      [39, 36, 35, 69, 21],
      [43, 37, 14, 57, 82],
      [52, 36, 21, 55, 1],
      [39, 15, 69, 28, 42],
      [87, 23, 13, 66, 53],
      [76, 56, 33, 81, 88],
      [18, 43, 50, 63, 40],
      [5, 87, 16, 73, 56],
      [69, 52, 21, 36, 22],
      [53, 60, 85, 43, 56],
      [1, 52, 62, 18, 84],
      [43, 29, 18, 10, 73],
      [71, 55, 59, 13, 31],
      [24, 66, 26, 29, 85],
      [86, 50, 10, 60, 2],
      [14, 8, 10, 52, 74],
      [9, 11, 24, 88, 20],
      [53, 35, 76, 73, 47],
      [15, 33, 50, 82, 9],
      [28, 54, 16, 36, 12],
      [30, 78, 76, 66, 89],
      [85, 87, 48, 4, 76],
      [53, 79, 45, 42, 78],
      [88, 15, 55, 78, 31],
      [27, 11, 63, 19, 17],
      [29, 71, 32, 50, 10],
      [75, 77, 19, 73, 83],
      [25, 81, 90, 16, 22],
      [56, 34, 6, 59, 3],
      [51, 79, 61, 17, 84],
      [5, 42, 69, 28, 26],
      [75, 43, 2, 49, 89],
      [5, 80, 76, 22, 75],
      [42, 85, 73, 32, 70],
      [64, 22, 45, 69, 29],
      [59, 82, 2, 32, 67],
      [2, 44, 35, 61, 80],
      [52, 30, 1, 80, 23],
      [61, 50, 72, 64, 69],
      [75, 89, 73, 39, 72],
      [34, 45, 69, 12, 73],
      [54, 21, 78, 28, 37],
      [28, 67, 62, 31, 60],
      [68, 6, 12, 24, 58],
      [48, 60, 56, 81, 16],
      [88, 10, 31, 22, 44],
      [68, 53, 10, 75, 12],
      [69, 82, 75, 23, 9],
      [69, 76, 66, 77, 8],
      [28, 24, 12, 10, 86],
      [72, 82, 30, 37, 1],
      [88, 89, 17, 45, 23],
      [44, 59, 38, 70, 61],
      [54, 18, 65, 57, 23],
      [43, 41, 30, 82, 89],
      [26, 85, 72, 65, 80],
      [42, 60, 41, 2, 73],
      [15, 55, 32, 17, 77],
      [67, 72, 15, 35, 28],
      [4, 43, 58, 31, 25],
      [31, 56, 28, 10, 87],
      [6, 50, 48, 59, 27],
      [1, 50, 14, 72, 33],
      [80, 32, 19, 31, 46],
      [37, 41, 54, 88, 12],
      [67, 71, 82, 47, 64],
      [79, 42, 12, 33, 28],
      [42, 21, 53, 24, 51],
      [64, 24, 79, 39, 15],
      [29, 70, 46, 72, 75],
      [73, 71, 21, 87, 41],
      [49, 19, 65, 57, 39],
      [26, 33, 2, 52, 62],
      [4, 53, 40, 6, 34],
      [23, 67, 46, 36, 80],
      [1, 71, 47, 87, 7],
      [47, 2, 55, 67, 32],
      [60, 33, 59, 37, 28],
      [73, 69, 9, 22, 36],
      [38, 79, 18, 48, 32],
      [20, 78, 15, 9, 21],
      [11, 57, 10, 6, 75],
      [88, 27, 33, 45, 43],
      [33, 68, 78, 62, 60],
      [52, 66, 62, 77, 34],
      [3, 76, 71, 26, 39],
      [57, 36, 62, 9, 79],
      [84, 75, 66, 53, 36],
      [77, 59, 71, 11, 62],
      [12, 13, 60, 61, 75],
      [61, 21, 82, 7, 80],
      [5, 66, 88, 75, 49],
      [71, 86, 21, 24, 28],
      [8, 71, 85, 86, 11],
      [74, 52, 48, 29, 10],
      [48, 7, 78, 70, 72],
      [90, 22, 33, 2, 43],
      [67, 59, 54, 30, 3],
      [15, 14, 47, 62, 29],
      [3, 73, 56, 77, 88],
      [19, 26, 7, 88, 61],
      [54, 12, 29, 63, 42],
      [8, 42, 65, 69, 12],
      [34, 17, 6, 69, 52],
      [43, 62, 4, 69, 85],
      [62, 76, 61, 81, 86],
      [66, 72, 11, 10, 9],
      [24, 19, 15, 49, 46],
      [41, 69, 48, 15, 14],
      [26, 77, 22, 72, 6],
      [20, 62, 68, 45, 12],
      [86, 55, 11, 43, 35],
      [18, 8, 56, 32, 54],
      [20, 21, 73, 1, 57],
      [6, 12, 10, 21, 62],
      [46, 54, 29, 74, 21],
      [60, 66, 48, 61, 70],
      [9, 66, 61, 83, 72],
      [56, 76, 50, 49, 81],
      [84, 35, 36, 25, 67],
      [5, 43, 69, 8, 27],
      [62, 74, 44, 81, 13],
      [74, 20, 22, 34, 46],
      [61, 7, 46, 19, 37],
      [81, 41, 24, 67, 22],
      [19, 83, 10, 42, 53],
      [34, 71, 70, 57, 55],
      [22, 27, 2, 39, 19],
      [79, 43, 64, 50, 55],
      [40, 11, 26, 71, 6],
      [83, 25, 79, 52, 88],
      [1, 62, 85, 4, 79],
      [15, 71, 46, 11, 51],
      [55, 9, 37, 56, 82],
      [84, 26, 18, 79, 33],
      [4, 64, 86, 24, 26],
      [69, 3, 53, 22, 44],
      [81, 17, 18, 42, 67],
      [29, 45, 42, 14, 38],
      [80, 19, 59, 9, 10],
      [69, 13, 2, 55, 1],
      [18, 30, 21, 7, 46],
      [48, 4, 69, 30, 14],
      [75, 33, 39, 27, 64],
      [58, 69, 31, 33, 36],
      [54, 10, 27, 59, 30],
      [38, 51, 47, 33, 19],
      [87, 74, 80, 64, 13],
      [2, 38, 79, 77, 48],
      [71, 17, 56, 1, 26],
      [41, 46, 7, 88, 27],
      [7, 66, 38, 29, 63],
      [88, 68, 57, 63, 27],
      [67, 19, 53, 82, 20],
      [51, 40, 9, 53, 42],
      [72, 48, 67, 56, 45],
      [3, 60, 47, 76, 17],
      [52, 44, 90, 19, 30],
      [16, 83, 31, 17, 44],
      [27, 75, 80, 41, 78],
      [86, 72, 41, 85, 32],
      [87, 80, 56, 13, 23],
      [72, 4, 79, 55, 61],
      [80, 61, 16, 22, 10],
      [70, 5, 79, 31, 86],
      [74, 73, 41, 4, 48],
      [41, 24, 10, 12, 33],
      [59, 81, 61, 54, 4],
      [2, 72, 17, 67, 11],
      [38, 36, 31, 90, 86],
      [45, 57, 56, 88, 69],
      [82, 54, 2, 42, 19],
      [35, 1, 83, 47, 75],
      [46, 13, 39, 19, 82],
      [10, 27, 31, 60, 49],
      [4, 68, 27, 66, 84],
      [24, 45, 44, 55, 73],
      [74, 11, 7, 30, 10],
      [54, 30, 6, 22, 79],
      [80, 26, 88, 42, 50],
      [35, 44, 57, 79, 12],
      [84, 62, 17, 82, 64],
      [51, 44, 58, 47, 68],
      [75, 26, 88, 51, 27],
      [36, 45, 15, 77, 89],
      [60, 62, 3, 17, 89],
      [34, 43, 69, 55, 3],
      [7, 24, 33, 41, 20],
      [55, 75, 90, 63, 17],
      [13, 74, 18, 2, 70],
      [84, 5, 81, 62, 48],
      [5, 43, 75, 78, 53],
      [52, 39, 26, 54, 50],
      [89, 69, 65, 39, 16],
      [3, 60, 20, 47, 76],
      [75, 46, 32, 76, 74],
      [32, 34, 46, 9, 42],
      [85, 2, 24, 89, 86],
      [76, 32, 28, 25, 67],
      [84, 50, 3, 7, 41],
      [18, 78, 69, 83, 35],
      [21, 57, 13, 79, 9],
      [52, 81, 44, 63, 39],
      [77, 59, 21, 8, 6],
      [6, 89, 88, 86, 35],
      [4, 2, 65, 12, 25],
      [18, 85, 28, 46, 29],
      [44, 67, 20, 89, 87],
      [19, 41, 29, 23, 6],
      [6, 82, 12, 71, 35],
      [46, 22, 65, 90, 47],
      [13, 23, 88, 89, 69],
      [51, 24, 83, 32, 48],
      [79, 68, 32, 18, 67],
      [47, 42, 51, 73, 68],
      [24, 65, 26, 87, 18],
      [52, 17, 72, 6, 22],
      [16, 46, 56, 41, 29],
      [62, 5, 84, 59, 16],
      [11, 54, 16, 86, 87],
      [27, 45, 1, 68, 14],
      [32, 67, 44, 69, 57],
      [24, 55, 58, 85, 87],
      [78, 61, 83, 30, 64],
      [80, 86, 84, 67, 62],
      [45, 46, 88, 71, 30],
      [41, 10, 75, 90, 8],
      [77, 6, 29, 37, 41],
      [52, 9, 67, 51, 11],
      [47, 15, 29, 36, 13],
      [41, 90, 71, 60, 34],
      [77, 23, 73, 30, 75],
      [32, 11, 58, 38, 70],
      [49, 25, 5, 4, 2],
      [51, 90, 29, 32, 77],
      [26, 45, 42, 6, 69],
      [51, 63, 7, 52, 41],
      [84, 65, 3, 67, 63],
      [1, 68, 21, 66, 56],
      [2, 69, 39, 43, 68],
      [83, 89, 15, 64, 41],
      [64, 9, 40, 1, 65],
      [62, 25, 44, 76, 54],
      [53, 12, 90, 33, 86],
      [40, 29, 23, 24, 21],
      [53, 48, 79, 5, 37],
      [40, 44, 34, 33, 84],
      [68, 56, 50, 15, 69],
      [13, 89, 49, 45, 37],
      [43, 50, 66, 16, 21],
      [31, 58, 59, 39, 57],
      [71, 39, 86, 23, 57]
    );

    this.state = {
      ticketCount: this.tickets.length,
      theValue: Module._simple()
    };
  }

  render() {
    return (
      <div>
        <div>Number of Lottery tickets: {this.state.ticketCount}</div>
        <div>The value: {this.state.theValue}</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
