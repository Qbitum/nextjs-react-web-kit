export interface AccessDeniedPage {
  page: string;
}

export function AccessDeniedPage({ page }: AccessDeniedPage) {

  return (
    <>
      {/* the div was wrapped with PageWrapper and Page impoted from @qbitum/react-flat-ui  */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-pink-500">Access Denied</h1>
          <div className="text-lg"><p>You dont have permission to access {page}</p></div>
          <img src="../../AccessDenied.svg" alt="Access Denied Page" className="w-2/5" />
        </div>
      
    </>
  )
}