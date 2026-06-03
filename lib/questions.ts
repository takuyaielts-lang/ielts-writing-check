export interface ChartSeries {
  name: string;
  color: string;
  data: number[];
}

export interface Task1Question {
  id: number;
  title: string;
  prompt: string;
  xLabels: string[];
  yMin: number;
  yMax: number;
  yUnit: string;
  series: ChartSeries[];
}

export interface Task2Question {
  id: number;
  prompt: string;
  type: string;
}

export const task1Questions: Task1Question[] = [
  {
    id: 1,
    title: "Internet Usage Rates",
    prompt:
      "The graph below shows the percentage of households with internet access in three countries between 2005 and 2022. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 80 words.",
    xLabels: ["2005", "2008", "2011", "2014", "2017", "2020", "2022"],
    yMin: 0,
    yMax: 100,
    yUnit: "%",
    series: [
      {
        name: "South Korea",
        color: "#6ab98a",
        data: [72, 80, 87, 92, 95, 97, 98],
      },
      {
        name: "Brazil",
        color: "#c9a84c",
        data: [21, 34, 45, 55, 65, 74, 81],
      },
      {
        name: "Nigeria",
        color: "#7ba7d0",
        data: [4, 9, 18, 28, 40, 53, 62],
      },
    ],
  },
  {
    id: 2,
    title: "Average Monthly Temperatures",
    prompt:
      "The graph below shows the average monthly temperatures (in °C) in two cities—London and Sydney—over the course of one year. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 80 words.",
    xLabels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    yMin: -5,
    yMax: 30,
    yUnit: "°C",
    series: [
      {
        name: "London",
        color: "#6ab98a",
        data: [5, 5, 8, 11, 15, 18, 20, 20, 16, 12, 8, 5],
      },
      {
        name: "Sydney",
        color: "#c9a84c",
        data: [26, 26, 24, 21, 17, 14, 13, 14, 17, 20, 23, 25],
      },
    ],
  },
  {
    id: 3,
    title: "Annual Visitor Numbers",
    prompt:
      "The graph below shows the number of visitors (in thousands) to three national museums in a European country between 2010 and 2023. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 80 words.",
    xLabels: ["2010", "2012", "2014", "2016", "2018", "2020", "2022", "2023"],
    yMin: 0,
    yMax: 1200,
    yUnit: "k",
    series: [
      {
        name: "National Art Museum",
        color: "#6ab98a",
        data: [850, 900, 970, 1020, 1100, 480, 890, 1050],
      },
      {
        name: "Science Museum",
        color: "#c9a84c",
        data: [600, 650, 710, 780, 820, 350, 700, 810],
      },
      {
        name: "History Museum",
        color: "#7ba7d0",
        data: [400, 420, 460, 510, 540, 210, 490, 560],
      },
    ],
  },
];

export const task2Questions: Task2Question[] = [
  {
    id: 1,
    type: "Opinion",
    prompt:
      "Some people believe that technology has made modern life more complicated and stressful, while others argue that it has made life easier and more convenient.\n\nTo what extent do you agree or disagree? Give reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 150 words.",
  },
  {
    id: 2,
    type: "Problem & Solution",
    prompt:
      "In many countries, a significant number of young people are choosing to leave rural areas to live and work in large cities.\n\nWhat are the main reasons for this trend? What problems does it cause for both urban and rural areas?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 150 words.",
  },
  {
    id: 3,
    type: "Discussion",
    prompt:
      "Some people believe that universities should focus primarily on providing academic and theoretical knowledge. Others argue that the main purpose of a university education should be to prepare students for their future careers.\n\nDiscuss both views and give your own opinion.\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 150 words.",
  },
  {
    id: 4,
    type: "Opinion",
    prompt:
      "Many people argue that international tourism causes serious damage to local cultures and natural environments, and that these negative effects outweigh any economic benefits.\n\nTo what extent do you agree or disagree?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 150 words.",
  },
  {
    id: 5,
    type: "Opinion",
    prompt:
      "Governments should invest significantly more money in public transportation infrastructure rather than spending it on building new roads and expanding highways.\n\nTo what extent do you agree or disagree?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 150 words.",
  },
];
