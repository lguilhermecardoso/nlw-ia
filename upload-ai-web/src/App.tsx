import { useState } from 'react';
import { Github, FileVideo, Upload, Wand2 } from 'lucide-react';
import { Button } from "./components/ui/button";
import { Separator } from './components/ui/separator';
import { Textarea } from './components/ui/textarea';
import { Label } from './components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select';
import { Slider } from './components/ui/slider';

export function App() {

  const [temperature, setTemperature] = useState(0.5)

  return (
    <div className='min-h-screen flex flex-col'>

      <div className="px-6 py-3 flex flex-center justify-between border-b">
        <h1 className="text-xl font-bold">upload.ia</h1>

        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">Desenvolvido com 💜 no nlw</span>

          <Separator orientation='vertical'  className='h-6'/>
          <Button variant="outline">
            <Github className='w-4 h-4 mr-2' />
            Github
          </Button>
        </div>
      </div>

      <main className='flex-1 p-6 flex gap-6'>
        <div className='flex flex-col flex-1 gap-4'>
          <div className='grid grid-rows-2 flex-1 gap-4'>
            <Textarea placeholder='Inclua o prompt para a IA...'
              className='resize-none p-4 leading-relaxed'
            />
            <Textarea placeholder='Resultado gerado pela IA...'
              readOnly
              className='resize-none p-4 leading-relaxed'
            />
          </div>
          <p className="text-sm text-muted-foreground">
            Lembre-se: você pode utilizar a variável <code className="text-violet-400">{`{transcription}`}</code> no seu prompt para adicionar o conteúdo da transcrição do vídeo selecionado.
          </p>

        </div>
        <aside className='w-80 space-y-6'>
          <form className='space-y-6'>
            <label
              htmlFor="video"
              className='border flex rounded-md aspect-video cursor-pointer border-dashed text-small flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5'
            >
              <FileVideo className='w-4 h-4' />
              Selecione um vídeo
            </label>

            <input type="file" id="video" accept='video/mp4' className='sr-only'/>

            <Separator />

            <div className='space-y-2'>
              <Label htmlFor='transcription-prompt'>Prompt de transcrição</Label>
              <Textarea
                id="transcription-prompt"
                className='h-20 leading-relaxed resize-none'
                placeholder='Inclua palavras-chave mencionadas no video separadas por vírgula (,)'
              />
            </div>

            <Button type='submit' className='w-full'>
              Carregar vídeo
              <Upload className='h-4 w-4 ml-2' />
            </Button>

          </form>

          <Separator />
          <form className='space-y-6'>
          <div className='space-y-2'>
              <Label>Prompt</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um prompt" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='title'>Título do YouTube</SelectItem>
                  <SelectItem value='description'>Descrição do YouTube</SelectItem>
                </SelectContent>
              </Select>

              <span className="block text-sm text-muted-foreground italic">
                Você poderá customizar essa opção em breve
              </span>
            </div>

            <div className='space-y-2'>
              <Label>Modelo</Label>
              <Select disabled defaultValue='gpt-3.5'>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='gpt-3.5'>GPT 3.5-turbo 16k</SelectItem>
                </SelectContent>
              </Select>

              <span className="block text-sm text-muted-foreground italic">
                Você poderá customizar essa opção em breve
              </span>
            </div>
            <Separator />
            <div className="space-y-4">
              <Label>Temperatura</Label>
              <Slider
                min={0}
                max={1}
                step={0.1}
                value={[temperature]}
                onValueChange={value => setTemperature(value[0])}
              />
              <span className="block text-sm text-muted-foreground italic leading-relaxed">
                Valores mais altor tendem a deixar o resultado mais criativo e com possíveis erros.
              </span>
            </div>

            <Separator />

            <Button type="submit" className="w-full">
              Executar
              <Wand2 className="w-4 h-4 ml-2" />
            </Button>

          </form>
        </aside>
      </main>
    </div>
  )
}
