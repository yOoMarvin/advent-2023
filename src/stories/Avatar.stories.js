import Avatar from "../app/ui/Avatar";

const meta = {
  component: Avatar,
  tags: ["autodocs"],
};

export default meta;

export const Default = { args: {} };

export const Initials = { args: { initial: "AA" } };

export const Image = { args: { img: "/avatars/avatar-01.png" } };

export const Status = {
  args: { img: "/avatars/avatar-02.png", status: "online" },
};

export const SantaHat = { args: { img: "/avatars/avatar-03.png", xmas: true } };
