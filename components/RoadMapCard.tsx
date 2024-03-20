import Card from "@/components/Card";

export const RoadMapCard = ({
  month,
  goals,
}: {
  month: string;
  goals: string[];
}) => {
  return (
    <Card className="max-w-96">
      <div className="card-body flex flex-col items-center ">
        <h2 className="card-title text-center uppercase text-primary">
          {month}
        </h2>
        <span>
          {goals.map((goal) => (
            <li key={goal}>{goal}</li>
          ))}
        </span>
      </div>
    </Card>
  );
};

export default RoadMapCard;
