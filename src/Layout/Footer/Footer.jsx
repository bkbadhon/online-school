const Footer = () => {
    return (
        <footer className="footer bg-[#11e7d9] text-white p-10">
  <aside>
    <h2 className="text-2xl font-bold">TOTC<span className="text-orange-400">.e</span></h2>
    <p>
      TOTC Learning Ltd.
      <br />
      Providing reliable tech since 2012.
    </p>
  </aside>
  <nav>
    <h6 className="text-xl font-bold">Services</h6>
    <a className="link  link-hover">Branding</a>
    <a className="link  link-hover">Design</a>
    <a className="link  link-hover">Marketing</a>
    <a className="link  link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="text-xl font-bold">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="text-xl font-bold">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
    );
};

export default Footer;