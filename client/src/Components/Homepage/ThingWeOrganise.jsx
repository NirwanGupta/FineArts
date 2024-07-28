import React from 'react'
import ConfluEvents from './ConfluEvents'
import EventList from './EventList'
import PostContent from './PostContent'

export default function ThingWeOrganise({events,workshop}) {
    //  const handleSubmit = () => {
    //    document.getElementById('subscribeForm').submit()
    //  }
    return (
      <>
        <div className="container">
          <h1 className="what">Things We organise</h1>

          <div className="site-content">
            <div className="posts">
              {workshop.length > 0 ? (
                workshop.map((data) => (
                  <PostContent key={data._id} data={data} />
                ))
              ) : (
                <PostContent />
              )}
            </div>
            <aside className="sidebar">
              <div className="category">
                <h2>Different Events</h2>
                <ul className="list">
                  {events.length > 0 ? (
                    events.map((event) => (
                      <EventList key={event._id} data={event} />
                    ))
                  ) : (
                    <EventList />
                  )}
                </ul>
              </div>
              <div className="popular-post">
                <h2>popular Events on Confluence</h2>

                {events.length > 0 ? (
                  events.map((event) => (
                    <ConfluEvents key={event._id} data={event} />
                  ))
                ) : (
                  <ConfluEvents />
                )}
              </div>
              <div className="newsletter">
                <h2>newsletter</h2>
                <div className="form-element">
                  <form
                    target="_blank"
                    method="POST"
                    action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdCkzdbP02QLicfLXnntdAMfBl9x8L5zpCwYQFD4mC-E2x_hA/formResponse"
                  >
                    <input
                      type="email"
                      required
                      name="entry.882243583"
                      id=""
                      className="input-element"
                      placeholder="Email"
                    />
                    <button className="btn form-btn" type="submit">
                      Subscribe
                    </button>
                    {/* <div
                      className="form-btnn"
                      onClick={handleSubmit}
                      style={{ cursor: 'pointer' }}
                    >
                      Subscribe
                    </div> */}
                  </form>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </>
    )
}
