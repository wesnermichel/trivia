// const questionsData = [
//     {'Quetion1
// ];

const STORE = [ //This is an array of objects. The objects are the different views. Each object has a question property with string value. It has an array property called "answers" with possible answer items. It has a correct answer key, an icon key, and an alt key.
    {
      question: 'What is a group or gathering of crows called?',
      answers: ['Herd', 'Flock', 'Murder', 'Killing'], //This key-value pair is the possible answers to choose from.
      correctAnswer: 'Murder', //the correct answer
      icon: 'https://vetstreet.brightspotcdn.com/dims4/default/21c6008/2147483647/thumbnail/590x420/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F5d%2Fb0%2F887e026144fd92f8abc75f000650%2Fgroup-of-crows-istock-000009014614-590lc100814.jpg',
      alt: 'crows icon',
      mystery: 'https://vetstreet.brightspotcdn.com/dims4/default/21c6008/2147483647/thumbnail/590x420/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F5d%2Fb0%2F887e026144fd92f8abc75f000650%2Fgroup-of-crows-istock-000009014614-590lc100814.jpg'
    },
    {
      question: 'Which of these animals has the LONGEST life span?',
      answers: [
        'Bowhead Whale', 'African Elephant', 'Mayfly', 'North American Bald Eagle', 'Blue Whale'],
        correctAnswer: 'Bowhead Whale',
        alt: 'bowhead whale icon',
    },
    {
      question: 'Which of these is the largest land predator in the world?',
      answers: ['Saltwater crocodile', 'Polar Bear', 'Boa constrictor','African lion'],
        correctAnswer: 'Polar Bear',
    },
    {
      question: 'What gathering or group of animal do we refer to as a "business"?',
      answers: ['Elephants', 'Buzzards', 'Monkies', 'ferrets'],
      correctAnswer: 'ferrets',
      mystery: 'images/Mystery-Animal.jpg'
    },
    {
      question: 'Which of these statements (if any) is true?',
      answers: ['Snakes cannot slither on glass', 'Honey Bees can be trained to detect bombs', 'Cat urine glows under a black light', 'All are true'],
      correctAnswer: 'All are true',
      mystery: 'images/color_window-animal-silhouette.jpg'
    }
    
];