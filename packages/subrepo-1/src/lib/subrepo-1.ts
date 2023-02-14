import { sub2 } from '@k8w-test/monorepo-template-subrepo-2';

export function subrepo1(): string {
  console.log(sub2);
  return 'subrepo-1';
}
