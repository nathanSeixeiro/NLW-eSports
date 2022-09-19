import "./style/main.css";
import { useState, useEffect } from "react";
import { Input } from "./components/Form/Input";
import { GameController } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";
import logoImg from "./assets/Logo-nlw-esports.svg";
import { GameBanner } from "./components/GameBanner";
// import { CreatedModal } from "./components/CreatedModal";
import { CreateAdBanner } from "./components/CreateAdBanner";

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch("http://localhost:3333/games")
      .then((response) => response.json())
      .then((data) => {
        setGames(data);
      });
    console.log(games);
  }, []);

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center mt-20 mb-12">
      <img src={logoImg} alt="logo" />

      <h1 className="text-6xl text-white font-black mt-2">
        your{" "}
        <span className="bg-duo-gradient text-transparent bg-clip-text">
          duo
        </span>{" "}
        is here!
      </h1>
      {/* end title */}

      <div className=" grid grid-cols-6 gap-6 mx-3 mt-16">
        {games.map((game) => {
          return (
            <GameBanner
              key={game.id}
              title={game.title}
              bannerUrl={game.bannerUrl}
              adsCount={game._count.ads}
            />
          );
        })}

        <GameBanner title="fora" bannerUrl="./" adsCount={2} />
      </div>

      <Dialog.Root>
        <CreateAdBanner />

        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 inset-0 fixed">
            <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
              <Dialog.Title className="text-3xl text-white font-black">
                publish a announcemnet
              </Dialog.Title>

              <form className="mt-8 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-white font-semibold" htmlFor="game">
                    What game?
                  </label>
                  <Input
                    id="game"
                    placeholder="select the game you want to play"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="name">What's your nickname?</label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="name/nickname in game"
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="yearsPlaying">Years playing?</label>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="discord">Discord user:</label>
                    <Input
                      id="discord"
                      type="text"
                      placeholder="Ex: User#0000"
                    />
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="weekDays">When do you usually play?</label>
                    <div className="flex gap-0.5">
                      <button className="w-8 h-9 rounded bg-zinc-900">d</button>
                      <button className="w-8 h-9 rounded bg-zinc-900">s</button>
                      <button className="w-8 h-9 rounded bg-zinc-900">t</button>
                      <button className="w-8 h-9 rounded bg-zinc-900">q</button>
                      <button className="w-8 h-9 rounded bg-zinc-900">q</button>
                      <button className="w-8 h-9 rounded bg-zinc-900">s</button>
                      <button className="w-8 h-9 rounded bg-zinc-900">s</button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 flex-1">
                    <label htmlFor="hoursStar">What's time</label>
                    <div className="grid grid-cols-2 gap-2">
                      <Input id="hoursStar" type="time" placeholder="De" />
                      <Input id="hoursEnd" type="time" placeholder="Ate" />
                    </div>
                  </div>
                </div>

                <div className="mt-2 flex gap-2 text-sm">
                  <Input type="checkbox" />
                  Voice Chat
                </div>

                <footer className="mt-4 flex justify-end gap-4 ">
                  <Dialog.Close className="bg-zinc-500 px-5 rounded-md font-semibold h-12 hover:bg-zinc-600">
                    Cancelar
                  </Dialog.Close>

                  <button
                    className="bg-violet-600 px-5 rounded-md font-semibold h-12 flex items-center gap-3 hover:bg-violet-700"
                    type="submit"
                  >
                    <GameController className="w-6 h-6" />
                    Find your duo
                  </button>
                </footer>
              </form>
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

export default App;
