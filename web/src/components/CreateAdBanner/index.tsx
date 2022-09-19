import * as Dialog from '@radix-ui/react-dialog';
import { MagnifyingGlassPlus } from 'phosphor-react';

export function CreateAdBanner(){
    return(
      <div className="pt-1 bg-duo-gradient self-stretch rounded-lg mt-8 mx- overflow-hidden">
      <div className=" bg-[#2a2634] px-8 py-6 flex justify-between items-center">
        <div>
          <strong className="text-2xl text-white font-black block">
          Didn't find your's duo?
          </strong>
          <span className="text-zinc-400 block">
            Publish a announcemnet for find the new players!
          </span>
        </div>

        <Dialog.Trigger className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3">
          <MagnifyingGlassPlus size={24} />
          Publish ads
        </Dialog.Trigger>
      </div>
    </div>
    
    )
}

    