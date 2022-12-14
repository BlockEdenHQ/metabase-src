(ns metabase.test.mock.util)

(def table-defaults
  {:description             nil
   :entity_type             nil
   :caveats                 nil
   :points_of_interest      nil
   :show_in_getting_started false
   :schema                  nil
   :fields                  []
   :rows                    nil
   :updated_at              true
   :active                  true
   :id                      true
   :db_id                   true
   :visibility_type         nil
   :created_at              true})

(def field-defaults
  {:description        nil
   :table_id           true
   :caveats            nil
   :points_of_interest nil
   :fk_target_field_id false
   :updated_at         true
   :active             true
   :nfc_path           nil
   :parent_id          false
   :semantic_type      nil
   :id                 true
   :last_analyzed      true
   :position           0
   :visibility_type    :normal
   :preview_display    true
   :created_at         true})

(def pulse-channel-defaults
  {:schedule_frame nil
   :schedule_hour  nil
   :schedule_day   nil
   :entity_id      true
   :enabled        true})

(def venue-fingerprints
  "Fingerprints for the full venues table"
  {:name        {:global {:distinct-count 100
                          :nil%           0.0},
                 :type   {:type/Text {:percent-json   0.0, :percent-url   0.0,
                                      :percent-email  0.0, :percent-state 0.0,
                                      :average-length 15.63}}}
   :id          nil
   :price       {:global {:distinct-count 4
                          :nil%           0.0},
                 :type   {:type/Number {:min 1.0, :max 4.0, :avg 2.03, :q1 1.0, :q3 2.0 :sd 0.77}}}
   :latitude    {:global {:distinct-count 94
                          :nil%           0.0},
                 :type   {:type/Number {:min 10.06, :max 40.78, :avg 35.51, :q1 34.0, :q3 38.0 :sd 3.43}}}
   :category_id {:global {:distinct-count 28
                          :nil%           0.0}}
   :longitude   {:global {:distinct-count 84
                          :nil%           0.0},
                 :type   {:type/Number {:min -165.37, :max -73.95, :avg -116.0 :q1 -122.0, :q3 -118.0 :sd 14.16}}}})

(defn mock-execute-reducible-query [query respond]
  (respond
   {}
   (let [fields-count (count (get-in query [:query :fields]))]
     (for [i (range 500)]
       (repeat fields-count i)))))
