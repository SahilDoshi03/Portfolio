const ProjectsCard = () => {
  return (
    <div className="max-w-md w-full bg-gray-900 shadow-lg rounded-xl p-6">
      <div className="relative h-62 w-full mb-3">
        <img
          src="https://images.unsplash.com/photo-1577982787983-e07c6730f2d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2059&q=80"
          alt="Just a flower"
          className="w-full object-fill rounded-2xl"
        />
      </div>
      <div className="flex-auto justify-evenly text-primaryLight">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        aspernatur in asperiores tempora ipsa reiciendis placeat alias sunt
        voluptas aperiam, aut exercitationem corrupti perferendis labore
        dignissimos dolores molestias! Odit, soluta!
      </div>
    </div>
  );
};

export default ProjectsCard;
