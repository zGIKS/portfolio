export function About() {
  return (
    <div className="px-6 pb-10 pt-6 md:px-10">
      <ul className="list-disc space-y-4 pl-5 text-sm leading-relaxed text-black">
        <li>
          Software Engineering student at UPC (Peru) focused on backend systems,
          infrastructure, and security-aware services.
        </li>
        <li>
          Experience building backend services from scratch, including
          microservices, IAM systems, API gateways, and event-driven
          architectures.
        </li>
        <li>
          Security-focused mindset: JWT-based authentication, Zero Trust
          principles, private networking, and attack surface reduction, with
          hands-on Linux server deployments.
        </li>
        <li>
          Worked on academic and real-world projects, including:
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              Educational platform used by{" "}
              <span className="font-semibold underline underline-offset-2">
                150+ students
              </span>
            </li>
            <li>
              <span className="font-semibold underline underline-offset-2">
                IAM services in Rust
              </span>
            </li>
            <li>Secure web solutions for small businesses</li>
          </ul>
        </li>
        <li>
          Interested in backend platform, infrastructure, or security-critical
          engineering roles, with strong interest in scalable and reliable
          systems.
        </li>
      </ul>
    </div>
  );
}
