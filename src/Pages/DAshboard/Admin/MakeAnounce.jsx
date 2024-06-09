import Swal from "sweetalert2";

const MakeAnounce = () => {
  const handleAnnouncement = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;

    const announce = { title, description };
    console.log(announce);
    fetch("https://server-peach-omega-42.vercel.app/announces", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(announce),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Agreement Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div>
      <h3> Make a announcement</h3>
      <div>
        <form onSubmit={handleAnnouncement}>
          <div className="">
            <input
              type="text"
              placeholder="Title"
              name="title"
              className="input input-bordered w-full max-w-xs mr-5"
            />
            <input
              type="text"
              placeholder="Description"
              name="description"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <input type="submit" value="Announce" className="btn mt-5" />
        </form>
      </div>
    </div>
  );
};

export default MakeAnounce;
