export default function plopConfig(plop) {
  plop.setGenerator('Component', {
    description: 'Make a new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component Name',
      },
      {
        type: 'input',
        name: 'stories-prefix',
        message: 'Stories Prefix',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'plop-templates/component/Component.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: 'plop-templates/component/Component.test.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'plop-templates/component/Component.stories.tsx.hbs',
      },
    ],
  });

  plop.setGenerator('APIHook', {
    description: 'Make a new API Hook',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: "API Hook Name (don't include method or `use`)",
      },
      {
        type: 'input',
        name: 'route',
        message: 'What endpoint is it for? (url)',
      },
      {
        type: 'input',
        name: 'method',
        message: 'What HTTP Method does this endpoint use?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/lib/api/hooks/use{{pascalCase method}}{{pascalCase name}}.ts',
        templateFile: 'plop-templates/api-hook/APIHook.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/lib/api/hooks/use{{pascalCase method}}{{pascalCase name}}.stories.tsx',
        templateFile: 'plop-templates/api-hook/APIHook.stories.tsx.hbs',
      },
    ],
  });
}
