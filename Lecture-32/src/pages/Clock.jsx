import * as DateFns from "date-fns";
import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";

function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setTimeout(() => {
      setDate(new Date());
    }, 1000);
  }, [date]);

  const getTimes = (date) => {
    return {
      hours: DateFns.getHours(date),
      minutes: DateFns.getMinutes(date),
      seconds: DateFns.getSeconds(date),
    };
  };

  const formattedTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  const time = getTimes(date);

  return (
    <div>
      <Layout>
        <h1>This is Clock</h1>
        <h1>
          {formattedTime(time.hours)}:{formattedTime(time.minutes)}:
          {formattedTime(time.seconds)}
        </h1>
      </Layout>
    </div>
  );
}

export default Clock;
