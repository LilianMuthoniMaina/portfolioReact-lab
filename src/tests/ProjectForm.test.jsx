import { render, screen, fireEvent } from "@testing-library/react";
import ProjectForm from "../portfoliocomponents/ProjectForm";

test("adds a project", () => {
  const addProject = vi.fn();
  render(<ProjectForm addProject={addProject} />);

  fireEvent.change(screen.getByPlaceholderText(/project title/i), {
    target: { value: "My Project" }
  });

  fireEvent.change(screen.getByPlaceholderText(/project description/i), {
    target: { value: "My Project Description" }
  })
  
  fireEvent.click(screen.getByText(/add project/i));

  expect(addProject).toHaveBeenCalled();
});
