function HeaderComponent() {
  return (
    <div className="container-fluid my-5 ">
      <div className="container p-lg-5  container_div">
        <div className="text-center  p-5 ">
          <h1 className="display-5 fw-bold m-2">A Warm welcome!</h1>
          <p className="m-3">
            Bootstrap utility classes are used to create this jumbotron since
            the old component has been removed from the framework. Why create
            custom CSS when you can use utilities?
          </p>
          <button className="btn btn_custom_color m-3">Call To Action</button>
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;
