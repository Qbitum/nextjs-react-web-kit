import { Page } from "@qbitum/react-flat-ui";

export interface AccessDeniedPage {
  page: string;
}

export function AccessDeniedPage({ page }: AccessDeniedPage) {

  return (
    <>
      {/* <PageWrapper> */}

      <Page>
        <div className="text-center">
          <h1 className="text-4xl font-bold text-pink-500">Access Denied</h1>
          <div className="text-lg"><p>You dont have permission to access {page}</p></div>
          <img src="../../AccessDenied.svg" alt="Access Denied Page" className="w-2/5" />
        </div>
      </Page>

      {/* </PageWrapper> */}
    </>
  )
}