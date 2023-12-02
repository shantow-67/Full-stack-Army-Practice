/* eslint-disable react/prop-types */
import "./App.css";

const tasks = [
    {
        id: "unique_id_001",
        subtitle: "Subtitle",
        createdAt: "2022-04-24T18:04:42.792Z",
        tags: [
            {
                id: "tag-001",
                text: "Its done",
                icon: "T",
            },
            {
                id: "tag-002",
                text: "Its cancelled",
                icon: "X",
            },
            {
                id: "tag-003",
                text: "Its in progress",
                icon: "X",
            },
            {
                id: "tag-004",
                text: "Just wrote it",
                icon: "C",
            },
        ],
        comments: [
            {
                id: "comment-id-001",
                user: {
                    avatar: "xyz.com",
                    name: "Viraj",
                    id: "user-id-001",
                },
                text: "Duis enim tempor in sunt magna labore duis et. Amet commodo voad adipisicing mollit non dolor excepteur cupidatat amet consequat irure.",
            },
        ],
        tasks: [
            {
                id: "task-001",
                title: "Foggy Nelson",
                text: "Here to clean the streets of Hells Kitchen",
                status: "done",
            },
            {
                id: "task-002",
                title: "Louis CK",
                text: "Here to clean the streets of Hells Kitchen",
                status: "cancelled",
            },
            {
                id: "task-003",
                title: "Albert Einstein",
                text: "Here to clean the streets of Hells Kitchen",
                status: "progress",
            },
            {
                id: "task-004",
                title: "Albert Einstein",
                text: "Here to clean the streets of Hells Kitchen",
                status: "progress",
            },
        ],
    },
    {
        id: "unique_id_002",
        subtitle: "Subtitle",
        createdAt: "2022-04-24T18:04:42.792Z",
        tags: [
            {
                id: "tag-001",
                text: "Its done",
                icon: "T",
            },
        ],
        comments: [
            {
                id: "comment-id-001",
                user: {
                    avatar: "xyz.com",
                    name: "Viraj",
                    id: "user-id-001",
                },
                text: "Duis enim tempor in sunt magna labore duis et. Amet commodo voad adipisicing mollit non dolor excepteur cupidatat amet consequat irure.",
            },
        ],
        tasks: [
            {
                id: "task-001",
                title: "Foggy Nelson",
                text: "Here to clean the streets of Hells Kitchen",
                status: "done",
            },
            {
                id: "task-002",
                title: "Louis CK",
                text: "Here to clean the streets of Hells Kitchen",
                status: "cancelled",
            },
        ],
    },
    {
        id: "unique_id_001",
        subtitle: "Subtitle",
        createdAt: "2022-04-24T18:04:42.792Z",
        tags: [
            {
                id: "tag-001",
                text: "Its done",
                icon: "T",
            },
            {
                id: "tag-002",
                text: "Its cancelled",
                icon: "X",
            },
            {
                id: "tag-003",
                text: "Its in progress",
                icon: "X",
            },
            {
                id: "tag-004",
                text: "Just wrote it",
                icon: "C",
            },
        ],
        comments: [
            {
                id: "comment-id-001",
                user: {
                    avatar: "xyz.com",
                    name: "Viraj",
                    id: "user-id-001",
                },
                text: "Duis enim tempor in sunt magna labore duis et. Amet commodo voad adipisicing mollit non dolor excepteur cupidatat amet consequat irure.",
            },
        ],
        tasks: [
            {
                id: "task-001",
                title: "Foggy Nelson",
                text: "Here to clean the streets of Hells Kitchen",
                status: "done",
            },
            {
                id: "task-002",
                title: "Louis CK",
                text: "Here to clean the streets of Hells Kitchen",
                status: "cancelled",
            },
            {
                id: "task-003",
                title: "Albert Einstein",
                text: "Here to clean the streets of Hells Kitchen",
                status: "progress",
            },
        ],
    },
];

function getDay(dateStr) {
    const date = new Date(dateStr).getDay();
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    return days[date];
}

function formatDate(dateStr) {
    const date = new Date(dateStr);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

const TaskCard = ({ task }) => {
    return (
        <>
            <div className="task-wrapper">
                <h1 className="date">
                    {getDay(task.createdAt)},{formatDate(task.createdAt)}
                </h1>
                <h2 className="subtitle">{task.subtitle}</h2>
                <ul>
                    {task.tags.map(tag => (
                        <li key={tag.id}>{`${tag.icon}-${tag.text}`}</li>
                    ))}
                </ul>
                <div className="line"></div>
                <p>Notes Link to people</p>
                <div className="comments">
                    {task.comments.map(comment => (
                        <div key={comment.id} className="comments">
                            <h1>{comment.user.name}</h1>
                            <p>{comment.text}</p>
                        </div>
                    ))}
                </div>
                <div className="tasks">
                    {task.tasks.map(item => (
                        <div key={item.id} className="task-item">
                            <li>{item.title}</li>
                            <small>{item.status}</small>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

const App = () => {
    return (
        <>
            <div className="task-group">
                {tasks.map(task => (
                    <TaskCard key={task.id} task={task} />
                ))}
            </div>
            {/* <div className="cards-group">
                {tasks.map(task => (
                    <TaskCard key={task.id} task={task} />
                ))}
            </div> */}
        </>
    );
};

export default App;
