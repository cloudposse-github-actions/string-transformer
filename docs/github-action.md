<!-- markdownlint-disable -->

## Inputs

| Name | Description | Default | Required |
|------|-------------|---------|----------|
| input-string | The string you'd like to perform the operation on | N/A | true |
| max-length | The maximum length of the string, or -1 to not limit the length | -1 | false |
| operation | Operation you would like to run on the string, valid values are: `lowercase`, `uppercase`, `kebabcase`, `dns-subdomain` | lowercase | true |


## Outputs

| Name | Description |
|------|-------------|
| output-string | The transformed string |
<!-- markdownlint-restore -->
