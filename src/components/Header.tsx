interface HeaderProps {
  text: string;
  isFooter?: boolean;
}

function Header({ text, isFooter = false }: HeaderProps) {
  return (
    <>
      <header className={`fixed left-0 right-0 text-[#ededed] text-sm p-8 z-1 ${isFooter ? "bottom-0 bg-white" : "top-0 bg-gray-800 "}`}>
        <h1 className="font-bold">{text}</h1>
      </header>
    </>
  );
}

export default Header;