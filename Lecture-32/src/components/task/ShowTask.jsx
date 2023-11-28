/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

function ShowTask({ tasks }) {
  console.log(tasks);
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default ShowTask;
