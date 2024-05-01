import { Component } from '@angular/core';
import { MonacoEditorComponent, MonacoEditorConstructionOptions } from '@materia-ui/ngx-monaco-editor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'online-editor';
  editorOptions: MonacoEditorConstructionOptions = {
    theme: 'vs-dark', 
    language: 'javascript',
    padding: {
      top: 20
  }
  };
  code: string = '// write code here\n\n';
}
