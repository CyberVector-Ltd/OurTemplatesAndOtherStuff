# Managing templates

When managing templates it is important to follow the guidance below to ensure no problems are experienced when sending notifications in production.

- [Managing templates](#managing-templates)
  - [Access](#access)
  - [Generating payload schemas](#generating-payload-schemas)
  - [Testing templates](#testing-templates)
  - [Viewing a compiled template](#viewing-a-compiled-template)
  - [Creating/updating a template](#creatingupdating-a-template)
  - [Branching \& environments](#branching--environments)

## Access

<!-- TODO: Replace below url in link with project git repo url -->

Members of this git repository can be granted varying levels of access, to update templates and approve merge requests, in the [project settings](Update with project template git repo url).

## Generating payload schemas

Payload json schemas can be generated for all layouts within this directory by running:

```bash
# make generate-payload-schemas SERVICE=sendgrid
make generate-payload-schemas SERVICE={{serviceName}}
```

This will generate a `payloadSchema.json` file within your layout template directory, which will be used to validate payloads when sending notifications.

## Testing templates

You can test sendgrid templates within this repository by running the following:

```bash
# make test-templates SERVICE=sendgrid
make test-templates SERVICE={{serviceName}}
```

This will look in your `sendgrid.json` file and make sure all registered layouts compile successfully with the provided partials and sample data.

## Viewing a compiled template

Run the following script to compile out each layout to the `compiledLayouts` dir. The script uses test data from your `model.ts` and allows you to visualise the end product for a notification.

```bash
# make compile-layouts SERVICE=sendgrid
make compile-layouts SERVICE={{serviceName}}
```

## Creating/updating a template

When creating a new template you will need to construct a new [layout](./layouts.md), which should then be registered in your [`<provider>.json`](./providerJson.md) file. If you create any new [partials](./partials.md) they will also need to be added to this file. Conversely if you delete an entire template or any partials these changes also need to be reflected within your `<provider>.json` file.

_Whenever any change to this template repository are made you should run both of the following scripts:_

```bash
# Ensure schemas generate successfully and are up to date
make generate-payload-schemas SERVICE={{serviceName}}

# Test example payload data against defined templates
make test-templates SERVICE={{serviceName}}
```

This will make sure any potentially breaking/incorrect changes to notifications are not merged into `production`.

## Branching & environments

There are different branches which correspond to different environments. These branches should be be merged as the different environments are released. Any additions or changes to templates should go through our standard git practices on a branch which are then reviewed and merged into the corresponding branch.

| Branch    | Environment            |
| --------- | ---------------------- |
| `develop` | `development`, `local` |
| `release` | `staging`              |
| `main`    | `production`           |
