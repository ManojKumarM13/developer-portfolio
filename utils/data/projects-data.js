import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Face detection With Python',
        description: "Developed a face detection system using Python. Implemented various computer vision techniques to detect and recognize faces in images and videos. Utilized popular libraries such as OpenCV and dlib for face detection and facial landmark detection. Employed deep learning models like Haar cascades and convolutional neural networks (CNNs) for accurate face detection. Integrated the system with other applications for real-time face recognition and tracking.",
        tools: ['Python', 'OpenCV', 'dlib', 'Haar cascades', 'CNNs'],
        role: 'AI Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Chess With Reinforcement Learning',
        description: 'Developed a chess application using reinforcement learning techniques. Implemented the game logic and reinforcement learning algorithms to enable the AI to learn and improve its chess-playing capabilities over time. Used a custom dataset for training the AI model. Integrated features such as move prediction, board evaluation, and game analysis.',
        tools: ['Python', 'TensorFlow', 'Keras', 'Reinforcement Learning algorithms', 'custom datase'],
        role: 'AI Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Content Based Recommended Sysemt',
        description: 'Developed a content-based movie recommendation system using collaborative learning. The system analyzes movie content such as genre, actors, directors, and plot summaries to recommend similar movies. Implemented machine learning algorithms to learn user preferences and improve recommendations over time.',
        tools: [' Python', 'scikit-learn', 'pandas', 'numpy', 'NLTK', 'IMDb API'],
        code: '',
        role: 'Machine Learning Engineer',
        demo: '',
        image: realEstate,
    },
    {
       id: 4,
       name: '',
       description: "",
       tools: [],
        code: '',
        demo: '',
        image: ,
        role:'',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
